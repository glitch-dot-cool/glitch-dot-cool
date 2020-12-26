#!/bin/bash
set -x

git pull origin master
pm2 restart strapi
