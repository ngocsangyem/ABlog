import express from "express";
const router = express.Router();

/* POST add a new api to database */
const addApi = router.post("/register", (req, res, next) => {
	res.send("From API route");
});

export default addApi;
