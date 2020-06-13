// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var inquirer = require("inquirer");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
  return res.json(characters);
});



// Reservations (DATA)
// =============================================================
var reservations = [
  {
    routeName: "johndoe",
    fname: "John",
    lname: "Doe",
    phoneNumber: 1112223333,
    email: "john.doe@yahoo.com"
  },
  {
    routeName: "janedoe",
    fname: "Jane",
    lname: "Doe",
    phoneNumber: 2223334444,
    email: "jane.doe@yahoo.com"
  },
  {
    routeName: "bobdoe",
    fname: "Bob",
    lname: "Doe",
    phoneNumber: 3334445555,
    email: "bobby.kewl@gmail.com"
  },
];

// Route
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Displays all reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

var booked 
if (reservations.length <= 5) {
  booked = true;
}

else {
  booked = false;
}
res.json (booked);
})

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

