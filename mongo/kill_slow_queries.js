killLongRunningOps = function(maxSecsRunning) {
    var count = 0;
    currOp = db.currentOp();
    for (oper in currOp.inprog) {
        op = currOp.inprog[oper-0];
        if (op.secs_running > maxSecsRunning && op.op == "query" && !op.ns.startsWith("local")) {
            print("Killing opId: " + op.opid
            + " running over for secs: "
            + op.secs_running);
            db.killOp(op.opid);
            count++;
        }
    }
    print("Killed " + count + " operations")
};

killLongRunningOps(5)
