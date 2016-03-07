exports.notFound = function(req, res, next) {
	console.log('ERROR 404');
	res.status(404);
	res.render('not-found');
};
exports.serverError = function(error, req, res, next) {
	console.log('ERROR 500');
	res.status(500);
	res.render('server-error', {error: error});
};