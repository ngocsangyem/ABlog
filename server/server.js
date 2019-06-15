const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;
const api = require("./routes/api.routes");
const app = express();

// conection string
const db = "mongodb://admin:admin%40123@ds231517.mlab.com:31517/blogdb";

// Conect to database
mongoose.connect(db, err => {
	err ? console.log(err) : console.log("Conected to mongodb");
});

// Call route
import * as apiRouter from "./routes/api.routes";

// Handle json data
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});

// Init app
app.use("/api", [
	apiRouter.addApi,
	apiRouter.getApis,
	apiRouter.getSingleApi,
	apiRouter.router
]);

// app.use("/api", api);
app.listen(port, () => {
	console.log("Server running on loclhost: " + port);
});
