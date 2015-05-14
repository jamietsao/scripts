#!/bin/bash

for i in $(seq 1 6); do
    (echo "-------------------------------"
     echo "mongo-$i.production.gametime.co"
     echo "-------------------------------"
     ssh deploy@mongo-$i.production.gametime.co "mongo gametime_production --eval 'db.currentOp().inprog.forEach(function(op) { if (op.secs_running > 100) { print(JSON.stringify(op, null, 2)); } })'")
done
