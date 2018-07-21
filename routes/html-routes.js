var express = require('express')
var app = express();
var path = require('path');

//Routes to all HTML
module.exports = function (app) {

app.get('/', function(req, res){
res.send(path.join(__dirname + '/index.html'));
});

app.get('/projects', function(req, res){
res.send(path.join(__dirname + '/projects.html'));
});

app.get('/about', function(req, res){
res.send(path.join(__dirname + '/about.html'));
});

app.get('/contact', function(req, res){
res.send(path.join(__dirname + '/contact.html'));
});
}