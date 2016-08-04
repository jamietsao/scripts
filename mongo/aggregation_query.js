db.getCollection('events').aggregate([
    {
        $match: {
            datetime : { $gte : ISODate('2016-04-01T00:05:00Z') },
            team_id : { $nin : [ObjectId("56dfb5aef80c416363000002"), ObjectId("5727f4a1f80c413f20000006"), ObjectId("56d778fbf80c4103f6000006")] }
        }
    },
    {
        $group: {
            _id : { month : { $month: '$datetime'}, day : { $dayOfMonth : '$datetime' }, year : { $year : '$datetime' }, team_id : '$team_id' },
            count : { $sum : 1 }
        }
    },
    {
        $match : {
            count : { $gt : 1 }
        }
    }
])