db.currentOp()["inprog"].forEach(function(op) { if (op.secs_running > 100) { print(JSON.stringify(op, null, 2)); } })
