var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 42066);

app.get('/',function(req,res)
{
  res.render('home.handlebars');
});

app.get('/page1', function(req,res)
{
  res.render('page1.handlebars');
});

app.get('/page2', function(req,res)
{
  res.render('page2.handlebars');
});

app.get('/page3', function(req,res)
{
  res.render('page3.handlebars');
});

app.use(function(req,res){
  res.status(404);
  res.render('404.handlebars');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500.handlebars');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
