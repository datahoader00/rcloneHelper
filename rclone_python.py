#!/usr/bin/env python3
import sys
import subprocess


# Variables
## you rclone cloud name and don't forget colon(":") at the end.
cloudAccount = "aws_cloud:"
## sys.argv will be a argument.
cloudPathName = sys.argv[1]
## path will where to download
directoryName = "/path/"


## actually code.
subprocess.call(['rclone', 'copy', cloudAccount + cloudPathName, directoryName])
print("Downloading: " +  ys.argv[1]])
