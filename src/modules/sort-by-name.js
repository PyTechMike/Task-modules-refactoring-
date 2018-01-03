function sortByName(users) {
	var usersData = users.concat();
	usersData.sort(function (user1, user2) {
		return user1.fullName.localeCompare(user2.fullName);
	});
	return usersData;
}
function displayUsersByName(users) {
	var format = require('./main.js').format(users);
	var displayUsers = require('./main.js').displayUsers;
	var usersByNameTable = require('./main.js').usersByNameTable;
	var usersData = format;
	usersData = sortByName(usersData);
	displayUsers(usersByNameTable, usersData);
}

module.exports = displayUsersByName;