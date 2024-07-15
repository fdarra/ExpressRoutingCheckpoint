////
const express = require("express");
const app = express();
const path = require("path");


// Middleware to parse JSON requests

app.use(express.json());

// require the pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const port = 5000;
app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server is running on port ${port}`);
});


/////// verify disponibility of http://localhost
const checkdate = require("./middlewares/checkdate");
app.use(checkdate);



// API endpoint to retrieve data

app.get("/", checkdate, (req, res) => {
  // res.send("Welcome")
  res.render("home");
  console.log("welcome"); 
});



