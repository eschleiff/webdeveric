const express = require('express');
const exphbs = require('express-handlebars');
const gulp = require('./gulpfile');
const path = require('path');
const sendMail = require('./mailer');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');

const app = express();

app.use(session({
    secret: "to the moon",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());
app.use((req, res, next) => {
    res.locals.flashes = req.flash();
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.listen(3000, () => {
//     console.log('Now listening on Port 3000')
// });

module.exports = app;