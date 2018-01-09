var $ = require('jquery');
function displayAllUsers(users) {
	var format = require('./format.js')(users);
	var displayUsers = require('./display-users.js');
	var usersData = format;
	var allUsersTable = $('.all-users tbody');
	// var allUsersTable = require('./main.js').allUsersTable;
	displayUsers(allUsersTable, usersData);
}

module.exports = displayAllUsers;