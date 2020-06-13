// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

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

// Displays all reseravations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});



// Reservations (DATA)
// =============================================================
var reservations = [
  {
    routeName: "johndoe",
    name: "John Doe",
    phoneNumber: 1112223333,
    email: "john.doe@yahoo.com",
    uniqeId: 0001
  },
  {
    routeName: "janedoe",
    name: "Jane Doe",
    phoneNumber: 2223334444,
    email: "jane.doe@yahoo.com",
    uniqeId: 0002
  },
  {
    routeName: "bobdoe",
    name: "Bob Doe",
    phoneNumber: 3334445555,
    email: "bobby.kewl@gmail.com",
    uniqeId: 0003
  },
];

//5 booked? if so to waiting list
// var booked
// if (reservations.length <= 5) {
//   booked = true;
// }

// else {
//   booked = false;
// }
// res.json(booked);

// Displays a single character, or returns false
app.get("/api/reservations/:reservations", function (req, res) {
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
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
