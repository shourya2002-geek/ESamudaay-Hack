require("dotenv").config();
const express = require("express");
const request = require('request');

// const cors = require("cors");
const app = express();
app.get('/', (req, res) => {
  res.send("GET Request Call0")
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});