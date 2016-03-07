module.exports = function(app){
	var autenticar = require('./../middlewares/autenticador'); 
	var chat = app.controllers.chat;	
	app.get('/chat/:email', autenticar, chat.index);
};
