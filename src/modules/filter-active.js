var $ = require('jquery');
function filterActive(users) {
	return users.filter(function (user) {
		return user.active
	});
}
function displayActiveUsers(users) {
	var format = require('./format.js')(users);
	var displayUsers = require('./display-users.js');
	var activeUsersTable = $('.active-users tbody');
	// var activeUsersTable = require('./main.js').activeUsersTable;
	var usersData = format;
	usersData = filterActive(usersData);
	displayUsers(activeUsersTable, usersData);
}

module.exports = displayActiveUsers;