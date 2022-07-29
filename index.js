import express from "express";
import fetch from "node-fetch";

const app = express();
import bodyParser from "body-parser";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// import fetch from "node-fetch";
// const cors = require("cors");

app.get("/", (req, res) => {
	res.send("success send request");
});

app.post("/", (req, res) => {
	console.log("called post");
});

app.post("/on_search", (req, res) => {
	console.log("called on_search");
	console.log(req.body.message.catalog);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
	console.log(`Server Started at PORT ${PORT}`);
});
