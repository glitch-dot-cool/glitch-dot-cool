#!/bin/bash
set -x

cd ~/glitch-dot-cool/backend
git pull origin master
pm2 restart strapi