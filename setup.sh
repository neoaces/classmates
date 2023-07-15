#! /bin/bash
# project=/Users/neoace/Development/classmates
sudo docker pull arm64v8/ubuntu
sudo docker build -t cmserver .
sudo docker run -p 8080:80 cmserver