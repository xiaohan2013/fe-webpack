#!/usr/bin/env bash

set -e
echo "输入要发布的版本："
read VERSION

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Releasing "
    # commit to GitRepo
    git add -add
    git commit -m "[build] $VERSION"
    npm version $VERSION --message "[release] $VERSION"

    # publish to npm
    git push origin refs/tags/v$VERSION
    git push origin
    npm publish
fi





