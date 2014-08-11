'use strict';
var books = require('./controllers/books');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var json = require('koa-json');
var cors = require('koa-cors');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();

// Logger
app.use(logger());
app.use(json());
app.use(cors());

app.use(route.get('/books', books.list));


// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(1337);
  console.log('listening on port l337');
}
