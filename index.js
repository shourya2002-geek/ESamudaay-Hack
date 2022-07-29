import express from "express";
import fetch from "node-fetch";

const app = express();

// import fetch from "node-fetch";
// const cors = require("cors");

app.get("/", (req, res) => {
	res.send("success send request");
});
app.post("/add", async (req, res) => {
	console.log("called post");
	const url =
		"https://api.test.esamudaay.com/external/v1/ondc/retail/bpp/search";
	const options = {
		method: "POST",
		body: req.body,
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await fetch(url, options)
		.then((res) => res.json())
		.catch((err) => {
			console.error({
				message: "error",
				error: err,
			});
		});
	console.log(response);
	res.json(response);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
	console.log(`Server Started at PORT ${PORT}`);
});
