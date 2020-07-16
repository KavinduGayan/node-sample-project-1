var express = require('express');
var app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)
app.use(express.static(path.join(__dirname, 'public')))

/* GET users listing. */
/* app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/json', function(req, res, next) {
    const data = {
        'greeting':'Hello'
    }
    res.send(data);
  });
  app.get('/home', function(req, res, next) {
    res.render('home',null);
  }); */

const indexRouter = require('./routes/index')

app.use('/', indexRouter)
app.listen(3000)