var $ = require('jquery');
function sortByAge(users) {
	var usersData = users.concat();
	usersData.sort(function (user1, user2) {
		return user1.age > user2.age;
	});
	return usersData;
}
function displayUsersByAge(users) {
	var format = require('./format.js')(users);
	var displayUsers = require('./display-users.js');
	var usersByAgeTable = $('.all-users-by-age tbody');
	// var usersByAgeTable = require('./main.js').usersByAgeTable;
	var usersData = format;
	usersData = sortByAge(usersData);
	displayUsers(usersByAgeTable, usersData);
}

module.exports = displayUsersByAge;