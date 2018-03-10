var express = require('express');
var app = express();
app.use(express.static('dist')); // this takes precedence over get /
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);