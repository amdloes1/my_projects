var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://amdloes1:Mortaza01@cluster0.rir20cc.mongodb.net/?retryWrites=true&w=majority"

mongo.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

