#! /bin/bash
project=/Users/neoace/Development/classmates
sudo docker pull arm64v8/ubuntu
sudo docker build -t cmserver .
# sudo docker run -v $project/build:/build \
#                 -v $project/backend:/backend \
#                 -t cmserver \
sudo docker run -t cmserver