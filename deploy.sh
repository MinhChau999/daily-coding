#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy commit"
git push -f git@github.com:MinhChau999/daily-coding.git master:gh-pages

cd -