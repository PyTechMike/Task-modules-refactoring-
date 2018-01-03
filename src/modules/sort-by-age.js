function sortByAge(users) {
	var usersData = users.concat();
	usersData.sort(function (user1, user2) {
		return user1.age > user2.age;
	});
	return usersData;
}
function displayUsersByAge(users) {
	var format = require('./main.js').format(users);
	var displayUsers = require('./main.js').displayUsers;
	var usersByAgeTable = require('./main.js').usersByAgeTable;
	var usersData = format;
	usersData = sortByAge(usersData);
	displayUsers(usersByAgeTable, usersData);
}

module.exports = displayUsersByAge;