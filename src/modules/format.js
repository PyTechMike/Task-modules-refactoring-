function format(users) {
	var User = require('./user.js');
	return users.map(function (userData) {
		return new User(userData)
	});
}

module.exports = format;