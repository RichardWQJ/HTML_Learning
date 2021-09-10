#!/bin/bash

if [ $1 == "arm" ]; then
    /home/richard/tool-chain/bin/arm-linux-gnueabihf-gcc src/user-judge.c -o user-judge.bin
else
    gcc src/user-judge.c -o user-judge.bin
fi
