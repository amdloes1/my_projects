var http = require('http');
var fs = require('fs');
var file_save = require("Test.html");
http.createServer(function (req, res) 
{
    if (req.url == '/my_form_data') {
        var form = new file_save.IncomingForm();
        form.parse(req, function (err, fields, files) {
           
            console.log(fields.fullname)
         });
    }
    else{
        

    fs.readFile('Form.html', function(err, data) {
    res.write(data)
    return res.end();
});}
}).listen(8080);
