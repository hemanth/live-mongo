'use strict';
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/library');
var co = require('co');

var books = wrap(db.get('books'));

// From lifeofjs
co(function * () {
  var books = yield books.find({});
});

module.exports.list = function * list() {
  if ('GET' !== this.method){
    return yield next;
  }
  this.body = yield books.find({},'-_id');
};

