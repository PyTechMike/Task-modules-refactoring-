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

module.exports = User;