var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use(express.logger());

var fs=require('fs');
var  readFile = fs.readFileSync('index.html');


app.get('/', function(request, response) {
 // response.send('Hello World!');
    response.send(readFile.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
 
