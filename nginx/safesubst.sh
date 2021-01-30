#!/bin/sh
FORMATS=$(cat $1 | perl -nle 'print "$1" while /(\$\{.*?\})/g')
cat $1 | envsubst "${FORMATS}" | tee $2
