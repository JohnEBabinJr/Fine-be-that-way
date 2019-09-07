// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


var customers = [{
    name: "Fiona",
    phone: "(XXX) XXX-XXXX",
    email: "fxtzhou@gmail.com",
    bubblepoints: "999",
}, ];

//routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(customers);
});

app.get("/api/tables", function (req, res) {
    for (var i = 0; i < 5; i++) {
        return res.json(customers[i]);
    }
});

// Create New Customers - takes in JSON input
app.post("/api/reservations", function (req, res) {
    var newCustomer = req.body;
    customers.push(newCustomer);
    res.json(newCustomer);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});