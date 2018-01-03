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

var allUsersTable = $('.all-users tbody');
var activeUsersTable = $('.active-users tbody');
var usersByAgeTable = $('.all-users-by-age tbody');
var usersByNameTable = $('.all-users-by-name tbody');
var longNameUsersTable = $('.longname-users tbody');
var getUsers = dataService.getUsers;
var USERS_URL = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';

function User(data) {
	this.imageUrl = data.picture;
	this.firstName = data.name.first;
	this.lastName = data.name.last;
	this.fullName = `${data.name.first} ${data.name.last}`;
	this.active = Boolean(data.isActive);
	this.description = data.about;
	this.balance = data.balance;
	this.age = Number(data.age);
	this.registerDate = data.registered;
	this.companyName = data.company;
	this.email = data.email;
	this.tel = data.phone;
	this.address = data.address;
}

function format(users) {
	return users.map(function (userData) {
		return new User(userData)
	});
}

function displayUsers(tableElement, users) {
	var usersHtml;
	usersHtml = users.map(function (user) {
		return `<td><img src="${user.imageUrl}" alt="${user.firstName}"></td>`
			+ `<td>${user.fullName}</td>`
			+ `<td>${user.active}</td>`
			+ `<td>${user.description}</td>`
			+ `<td>${user.balance}</td>`
			+ `<td>${user.age}</td>`
			+ `<td>${user.registerDate}</td>`
			+ `<td>${user.companyName}</td>`
			+ `<td><a href="mailto:"${user.email}">${user.email}</a></td>`
			+ `<td><a href="tel:"${user.tel}">${user.tel}</a></td>`
			+ `<td>${user.address}</td>`
	}).join('</tr>\n<tr>');

	usersHtml = `<tr>${usersHtml}</tr>`;
	tableElement.html(usersHtml);
	return usersHtml;
}


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


module.exports = {
	format: format,
	displayUsers: displayUsers,
	allUsersTable: allUsersTable,
	activeUsersTable: activeUsersTable,
	usersByAgeTable: usersByAgeTable,
	usersByNameTable: usersByNameTable,
	longNameUsersTable: longNameUsersTable,
}

