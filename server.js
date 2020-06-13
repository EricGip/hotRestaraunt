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

<<<<<<< HEAD
var booked 
if (reservations.length <= 5) {
  booked = true;
}

else {
  booked = false;
}
res.json (booked);
})

=======
// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function (req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.fname.lname.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
>>>>>>> 2d7f57e9c7a5df3a579e75019e7e183993e8956c
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

