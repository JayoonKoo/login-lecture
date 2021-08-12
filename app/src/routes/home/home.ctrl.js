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
		
		console.log(userInfo);
	}
}

module.exports = {
	output,
	process
}
