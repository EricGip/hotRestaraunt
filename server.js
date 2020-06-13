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

// Displays all reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// // Displays a single character, or returns false
// app.get("/api/reservations/:character", function (req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
