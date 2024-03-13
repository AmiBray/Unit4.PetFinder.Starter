// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    //

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send({pets})

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
//select pet from pets where owner = John

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === "John");
    console.log(pet)
    res.send (pet)

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
//select pet from pets where name = spot

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);
console.log (pet)
    // send the pet as a response
 res.send(pet)
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;