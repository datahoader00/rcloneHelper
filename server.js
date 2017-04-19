// Importing Module
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var spawn = require('child_process').spawn;


// Variables
var openingPort = 1195;
var rclonePython = 'rclone_python.py';

// Server and post.
var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

// Code runner.
function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        res.writeHead(200, {
            'content-type': 'text/plain'
        	});
        res.write('Downloading File:\n\n');
        res.end( 
				fields.name
		);

// python code running 
py = spawn('python3', [rclonePython, fields.name])

console.log("Downloading :", fields.name);

    	});
	}

server.listen(openingPort);
console.log("Server Listening on: ", openingPort);
