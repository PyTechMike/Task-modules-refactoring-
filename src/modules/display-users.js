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

module.exports = displayUsers;