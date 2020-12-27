#!/bin/bash
set -x

rsync -r --delete-after -e "ssh -i ~/.ssh/strapi-deploy" $TRAVIS_BUILD_DIR oddlogic@45.33.76.67:~
