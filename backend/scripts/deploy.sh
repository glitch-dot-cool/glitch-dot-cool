#!/bin/bash
set -x

git pull origin main
pm2 restart strapi
