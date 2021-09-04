const express = require('express');
const exphbs = require('express-handlebars');
const gulp = require('./gulpfile');
const path = require('path/posix');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/random', (req, res) => {
    res.render('random');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// app.listen(3000, () => {
//     console.log('Now listening on Port 3000')
// });

module.exports = app;