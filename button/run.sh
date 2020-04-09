#!/bin/bash
cp src/index.html prod/index.html
cd prod; python3 -m http.server >log.txt 2>&1 &
cd -
npx babel --watch src --out-dir prod --presets react-app/prod 
