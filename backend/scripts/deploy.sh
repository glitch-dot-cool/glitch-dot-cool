#!/bin/bash
set -x

npm run build
rsync -r -e "ssh -i ~/.ssh/strapi-deploy" $TRAVIS_BUILD_DIR oddlogic@45.33.76.67:~
