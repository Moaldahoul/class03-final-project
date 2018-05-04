var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var categoriesRouter = require('./routes/categories');
var formRouter = require('./routes/form');
var listRouter = require('./routes/list');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// TODO: insert a new route here :)
app.use('/categories', categoriesRouter);
app.use('/form', formRouter);
app.use('/list', listRouter);






module.exports = app;