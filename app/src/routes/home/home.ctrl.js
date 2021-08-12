"use strict";
const UserStorage = require("../../models/UserStorage");

const output = {
	hello: (req, res) => {
		res.render("home/index");
	},
	login: (req, res) => {
		res.render("home/login");
	}
}

const process = {
	login: (req, res) => {
		const {id, password} = req.body;
		const userInfo = UserStorage.getUserInfo("id", "password");
		
		const response = {};
		if(userInfo.id.includes(id)) {
			const idx = userInfo.id.indexOf(id);
			if (userInfo.password[idx] === password) {
				response.success = true;
				return res.json(response);
			}
		}

		response.success = false;
		response.msg = "로그인을 할 수 없습니다.";
		return res.json(response);
	}
}

module.exports = {
	output,
	process
}
