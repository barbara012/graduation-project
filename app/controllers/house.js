var mongoose = require('mongoose');
var House = mongoose.model('House');

exports.publish = function(req, res) {
	var _house = req.body.house;
	house = new House(_house);
	house.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('suc');
		}
	});
};
exports.get = function(req, res) {
	House.find({}, function(err, data) {
		res.send(data);
	})
};
exports.getDetail = function(req, res) {
	var houseId = req.body.id;
	House.findById(houseId, function(err, data) {
		res.send(data);
	})
};
exports.saveImg = function(req, res) {
	res.send(req.files);
};
exports.search = function(req, res) {
	var where = req.body.where;
	var number = parseInt(req.body.number);
	House.find({'address.city': where, 'peopleNum': number}, function(err, data) {
			console.log(data);
	})
};
exports.searchState = function(req, res) {
	var state = req.body.state;
	House.find({'address.state': state}, function(err, data) {
		res.send(data);
	})
};
exports.searchCity = function(req, res) {
	var city = req.body.city;
	House.find({'address.city': city}, function(err, data) {
		res.send(data);
	})
};
