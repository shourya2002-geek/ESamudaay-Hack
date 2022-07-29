require("dotenv").config();
const express = require("express");
const request = require('request');

// const cors = require("cors");
const app = express();
app.get('/', (req, res) => {
  res.send("GET Request Call0")
})





app.post('/add', function(req, res){
  console.log(req.body);
  request.post(
    {
    url:'https://api.test.esamudaay.com/external/v1/ondc/retail/bpp/search',
    
    headers: {
        'Content-Type': 'application/json'
    }
    },
  function(error, response, body){
    // console.log(error);
    // console.log(response);
    console.log(body);
    res.send(body);
  });
  // res.send("body");
});
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});