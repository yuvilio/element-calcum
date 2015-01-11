#!/usr/bin/env sh
./node_modules/.bin/browserify-standalone
mkdir -p dist/build 
mv element-calcum.js dist/build/element-calcum.js
