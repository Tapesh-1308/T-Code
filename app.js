const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost/contactForm', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 8000;
// app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({
    extended: true
}))

//Define Mongoose Schema
var contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    desc: String
});

var Contact = mongoose.model('Contact', contactSchema);

// PUG SPECIFIC STUFF
// app.set('view engine', 'html') // Set the template engine as pug
app.use(express.static(path.join(__dirname, 'views')));// Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    // const params = {}
    res
        .status(200)
        .sendFile(path.join(__dirname, "views", "index.html"));
})


app.get('/html-tuts', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "html-tut.html"));
})
app.get('/css-tuts', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "css-tut.html"));
})
app.get('/js-tuts', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "js-tut.html"));
})
app.get('/python-tuts', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "python-tut.html"));
})
app.get('/java-tuts', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "java-tut.html"));
})

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("Bhai ho gya submit")
        console.log(myData);
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});