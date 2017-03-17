var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var port = process.env.PORT || 5000;
var uri = process.env.MONGOLAB_URI || 'mongodb://cooldude:1234@ds131480.mlab.com:31480/heroku_080807zm'; //process.env.MONGOLAB_URI is for Heroku
var regex = new RegExp("(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})"); // matches viable URL strings

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req,res){
  res.render('index');
});

app.get('/:num', function(req,res){

});

app.listen(port, function(){
  console.log('URL shortener listening on port ' + port);
});
