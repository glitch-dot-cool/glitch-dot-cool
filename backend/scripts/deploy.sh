#!/bin/bash
set -x

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/glitch-dot-cool oddlogic@45.33.76.67:~/glitch-dot-cool
