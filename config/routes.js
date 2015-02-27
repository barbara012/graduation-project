var User = require('../app/controllers/user');
var House = require('../app/controllers/house');
var path = require('path');

module.exports = function(app) {
	// Index
	app.get('/', function(req, res) {
		res.render('index', { title: 'Express' });
	});

	// User
	app.post('/user/signup', User.signup);
	app.post('/user/login', User.login);

	//House
	app.post('/new', House.publish);
	app.get('/getHouse', House.get);
	app.post('/getHouseDetail', House.getDetail);
	app.post('/upload/imgs', House.saveImg);

	//Search
	app.post('/search', House.search);
	app.post('/searchState', House.searchState);

}
