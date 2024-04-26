require("dotenv").config();

const express = require("express");
const app = express();
// const port = process.env.port;
const port = 4000;

app.get("/", (req, res) => {
  res.send("hhuihijiiu!");
});

app.get("/twitter/", (req, res) => {
  res.send("shruti.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai and code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai and code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
