// dragfire

var express = require('express');
var compress = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');

var app = express();
var debug = require('debug')('Nashty: App');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use compession
app.use(compress());
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, //don't create session until something stored
    secret: 'shhhh, very very secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res, next) {
    res.render('index');
});

app.get('/dashboard', function (req, res) {
    res.render('pages/dashboard');
});


module.exports = app;
