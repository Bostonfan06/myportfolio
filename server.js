var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080

//Routes to all HTML Pages//

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/projects', function(req, res){
  res.sendFile(path.join(__dirname + '/public/projects.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});

require('./routes/html-routes.js')(app)

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT)
})