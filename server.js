require("./models/db");

const express = require("express");
const employeeController = require("./controllers/employeeController");
const path = require("path");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});

app.use("/employee", employeeController);
