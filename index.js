require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});