var express = require('express')
var app = express();
var path = require('path');

//Routes to all HTML
module.exports = function (app) {

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/home', function(req, res){
res.sendFile(path.join(__dirname + '/public/opening.html'));
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
}