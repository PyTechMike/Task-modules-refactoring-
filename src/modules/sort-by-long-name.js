var $ = require('jquery');
function filterLongName(users) {
	return users.filter(function (user) {
		return user.lastName.length >= 6;
	});
}
function displayLongNameUser(users) {
	var format = require('./main.js').format(users);
	var displayUsers = require('./main.js').displayUsers;
	var longNameUsersTable = $('.longname-users tbody');
	// var longNameUsersTable = require('./main.js').longNameUsersTable;
	var usersData = format;
	usersData = filterLongName(usersData);
	displayUsers(longNameUsersTable, usersData);
}

module.exports = displayLongNameUser;