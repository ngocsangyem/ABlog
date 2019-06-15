import express from "express";
const router = express.Router();
const User = require("../../model/users");

/* REGISTER to database */
export const registerUser = router.post("/register", (req, res, next) => {
	// get dat from form
	let userData = req.body;
	let user = new User(userData);
	user.save((err, registeredUser) => {
		// If no err, will send status 200 and detail of the register
		err ? console.log(err) : res.status(200).send(registeredUser);
	});
});

export const loginUser = router.post("/login", (req, res) => {
	// get dat from form
	let userData = req.body;

	User.findOne({ email: userData.email }, (err, user) => {
		if (err) {
			console.log(err);
		} else {
			if (!user) {
				res.status(401).send("Something wrong with your email");
			} else if (user.password !== userData.password) {
				res.status(401).send("Something wrong with your password");
			} else {
				res.status(200).send(user);
			}
		}
	});
});
