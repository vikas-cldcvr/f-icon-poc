#!/bin/bash

HERE=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$HERE"

yarn analyze
cd "./custom-elements-manifest-vue"
yarn && yarn build
cd ..
node generate-types.js 
yarn build