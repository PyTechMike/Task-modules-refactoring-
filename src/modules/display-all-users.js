function displayAllUsers(users) {
	var format = require('./main.js').format(users);
	var displayUsers = require('./main.js').displayUsers;
	var usersData = format;
	var allUsersTable = require('./main.js').allUsersTable;
	displayUsers(allUsersTable, usersData);
}

module.exports = displayAllUsers;