"use strict";

class UserStorage{
	static #user = {
		id: ["koo", "ja", "yoon"],
		password: ["123", "456", "789"],
		name: ["구", "자", "윤"],
	}

	static getUserInfo(...fields) {
		const users = this.#user;
		const newUsers = fields.reduce((newUsers, field) => {
			if (users.hasOwnProperty(field)) {
				newUsers.field = users[field];
			}
			return newUsers;
		}, {});

		return newUsers;
	}
}
