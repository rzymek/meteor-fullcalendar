#!/bin/bash
set -e 
cd "`dirname $0`/fullcalendar"
git submodule init
git submodule update
if [[ -z "$1" ]];then
  VER=`git tag | tail -n1 | sed 's/^v//'`
else
  VER="$1"
fi
git checkout v$VER
sed -i -e 's/version: "\([^"]*\)"/version: "'$VER'"/' ../package.js 
                 
