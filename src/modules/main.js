var $ = require('jquery');
var displayAllUsers = require('./display-all-users');
var displayActiveUsers = require('./filter-active');
var displayUsersByAge = require('./sort-by-age');
var displayUsersByName = require('./sort-by-name');
var displayLongNameUser = require('./sort-by-long-name');

var dataService = {
	getUsers: function (url, callback) {
		$.ajax({
			url,
			type: 'GET',
			success: callback
		});
	},
};

var getUsers = dataService.getUsers;
var USERS_URL = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';


// #1
getUsers(USERS_URL, displayAllUsers);


// #2

getUsers(USERS_URL, displayActiveUsers);


// #3

getUsers(USERS_URL, displayUsersByAge);


// #4

getUsers(USERS_URL, displayUsersByName);


// #5

getUsers(USERS_URL, displayLongNameUser);


