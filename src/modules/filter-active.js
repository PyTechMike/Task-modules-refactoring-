function filterActive(users) {
	return users.filter(function (user) {
		return user.active
	});
}
function displayActiveUsers(users) {
	var format = require('./main.js').format(users);
	var displayUsers = require('./main.js').displayUsers;
	var activeUsersTable = require('./main.js').activeUsersTable;
	var usersData = format;
	usersData = filterActive(usersData);
	displayUsers(activeUsersTable, usersData);
}

module.exports = displayActiveUsers;