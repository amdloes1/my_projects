var http = require('http');
var formidable = require('formidable');
var mysql = require('mysql');
http.createServer(function (req, res) {
    if (req.url == '/formupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var name = fields.user_name
            var age = fields.user_age
            var query = "INSERT INTO user_info VALUES ('" + name + "'," + age + ")";
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "qwerty123",
                database: "my_class"
              });
              con.connect(function(err) {
                if (err) throw err;
                con.query(query, function (err, result) {
                  if (err) throw err;
                  console.log("Result: " + result);
                  res.write('Data inserted to database');
                  res.end();
              });
              });
        });
    }
    else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="formupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="user_name" placeholder="Name" required><br>');
    res.write('<input type="number" name="user_age" placeholder="Age" required><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);