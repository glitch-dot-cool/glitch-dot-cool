#!/bin/bash
set -x

rsync -r --delete-after --quiet -e "ssh -i $HOME/.ssh/strapi-deploy" $TRAVIS_BUILD_DIR/glitch-dot-cool oddlogic@45.33.76.67:$HOME/glitch-dot-cool
