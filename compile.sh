#!/bin/bash

HERE=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$HERE"

yarn analyze
cd "./custom-elements-manifest-vue"
yarn && yarn build
cd ..
echo "generating types..."
node generate-types.js 
echo "building library..."
yarn build