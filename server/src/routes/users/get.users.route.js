import express from "express";
const router = express.Router();

/* GET list of all api. */
const getAllUser = router.get("/", (req, res, next) => {
	res.send("From API route");
});

export default getAllUser;
