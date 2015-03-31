#!/bin/bash
set -e 
git submodule init
git submodule update --remote
cd "`dirname $0`/fullcalendar"
if [[ -z "$1" ]];then
  VER=`git tag | tail -n1 | sed 's/^v//'`
else
  VER="$1"
fi
git checkout v$VER
sed -i -e 's/version: "\([^"]*\)"/version: "'$VER'"/' ../package.js 
                 
