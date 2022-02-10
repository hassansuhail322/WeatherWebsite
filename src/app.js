const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port =  process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.listen(port, () => {
  console.log(`The app is working on local host : ${port}`);
});
