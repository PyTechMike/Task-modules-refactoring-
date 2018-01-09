var $ = require('jquery');
function sortByName(users) {
	var usersData = users.concat();
	usersData.sort(function (user1, user2) {
		return user1.fullName.localeCompare(user2.fullName);
	});
	return usersData;
}
function displayUsersByName(users) {
	var format = require('./format.js')(users);
	var displayUsers = require('./display-users.js');
	var usersByNameTable = $('.all-users-by-name tbody');
	// var usersByNameTable = require('./main.js').usersByNameTable;
	var usersData = format;
	usersData = sortByName(usersData);
	displayUsers(usersByNameTable, usersData);
}

module.exports = displayUsersByName;