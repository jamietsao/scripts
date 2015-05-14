
collection = 'teams'

var date = new Date('2015-05-12T23:45:00Z');
var secs = Math.floor(date.getTime() / 1000);

var hexSecs = secs.toString(16);

var id = ObjectId(hexSecs + "0000000000000000");

db[collection].find( { _id : { $gt : id } } ).count()