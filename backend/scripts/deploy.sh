#!/bin/bash
set -x

rsync -r --delete-after --quiet -e "ssh -i ~/.ssh/strapi-deploy" $TRAVIS_BUILD_DIR oddlogic@45.33.76.67:~/glitch-dot-cool
