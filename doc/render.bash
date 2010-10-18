#!/bin/bash

DIR="dot"
FLAGS="-T png -Gcharset=latin1"

echo "Rendering..."

for i in `ls $DIR | grep "\.dot$"`; do
    echo ${i%.dot}...
    dot $FLAGS $DIR/$i -o ${i%.dot}.png
done

echo "Done."
