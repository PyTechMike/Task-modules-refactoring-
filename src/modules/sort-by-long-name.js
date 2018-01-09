var $ = require('jquery');
function filterLongName(users) {
	return users.filter(function (user) {
		return user.lastName.length >= 6;
	});
}
function displayLongNameUser(users) {
	var format = require('./format.js')(users);
	var displayUsers = require('./display-users.js');
	var longNameUsersTable = $('.longname-users tbody');
	// var longNameUsersTable = require('./main.js').longNameUsersTable;
	var usersData = format;
	usersData = filterLongName(usersData);
	displayUsers(longNameUsersTable, usersData);
}

module.exports = displayLongNameUser;