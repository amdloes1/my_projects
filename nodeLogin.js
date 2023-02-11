var http = require('http');

http.createServer(function (req, res) {
    
    var body = "";

    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function (req) {
        
        var postData = body;

        eval('var userLogin=' + postData);
        
        var Mongo = require('mongodb').MongoClient;

        var url = "";

        Mongo.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("PlumPicks");
    
            var user = {username: userLogin.username, password: userLogin.password};

            dbo.collection("Users").findOne(user, function(err, result) {
                if (err) throw err;

                if(result==null){
                    console.log('User not found.');
                }
                else {
                    console.log("User found!")
                }
            });

        });
        
        res.writeHead(200);
        res.end();
    });
}).listen(8080);
