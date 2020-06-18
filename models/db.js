const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",

  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connection works!!");
    } else {
      console.log("error connecting to mongoDB" + err);
    }
  }
);
require("./employee.model");
