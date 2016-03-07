/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contato = new Schema({
    nome: String, 
	email: String
});

var usuario = new Schema({
	nome: { type: String, required: true },
    email: { type: String, required: true,
             index: { unique: true } },
    contatos: [contato]
});

module.exports = mongoose.model('usuarios', usuario);*/

module.exports = function(app) {

  //var db = require('../libs/db_connect')();
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var contato = Schema({
    nome: String
  , email: String
  });

  var usuario = Schema({
      nome: { type: String, required: true }
    , email: { type: String, required: true
             , index: {unique: true} }
    , contatos: [contato]
  });

  //return db.model('usuarios', usuario);
  return mongoose.model('usuarios', usuario);
};