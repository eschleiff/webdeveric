const express = require('express');
const exphbs = require('express-handlebars');
const gulp = require('./gulpfile');
const path = require('path');
const sendMail = require('./mailer');
const flash = require('connect-flash');
const session = require('express-session');

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

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/random', (req, res) => {
    res.render('random');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    let userInfo = req.body

    try {
        sendMail.send(userInfo);
        req.flash('success', "Message Sent Successfully!")
        res.redirect('back');
        console.log('send successful')
    } catch (error) {
        console.log(error)
    }

});

// app.listen(3000, () => {
//     console.log('Now listening on Port 3000')
// });

module.exports = app;