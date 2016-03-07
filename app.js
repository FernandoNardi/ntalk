var express = require('express');
var load = require('express-load');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var error = require('./middlewares/error');
var app = express();
/*var server = require('http').createServer(app);
var io = require('socket.io').listen(server);*/
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session({  	
  	secret: 'keyboard cat',
  	resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


io.sockets.on('connection', function (client) {
	client.on('send-server', function (data){
		var msg = '<b>' + data.nome + '</b> ' + data.msg + '<br />';
		client.emit('send-client', msg);
		client.broadcast.emit('send-client', msg);
	});
});


load('models')
    .then('controllers')
    .then('routes')
    .into(app);


app.use(error.notFound);
//app.use(error.serverError);

app.listen(3000, function(){
  console.log("Ntalk no ar")
});
