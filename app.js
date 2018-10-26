/* global __dirname */
'use strict';
const express = require('express');
const http = require('http');
const config = require('./config.json');
const favicon = require('express-favicon');
const minify = require('express-minify-html');
const staticAsset = require('static-asset');
const compression = require('compression');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const Router = require('./routes');

const app = express();
const dbConnection = require('./dbConnection.js')(app);

app.use(compression());
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.set('config', config);

app.use(minify({
  override:      true,
  exception_url: false,
  htmlMinifier: {
    removeComments:            true,
    collapseWhitespace:        true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes:     true,
    removeEmptyAttributes:     true,
  }
}));

app.use(staticAsset(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.use(session({
   
  secret: config.secret,
  saveUninitialized: false,
  resave: false,
  store: new mongoStore({url: 'mongodb://localhost/test'})
   
}));

app.use(express.urlencoded({
       
   extended: true

}));

app.use(Router);

app.use((req, res, next) => {

  next(404);

});


app.use((err, req, res, next) => {

    res.status(err.status || 500);

    res.render('error');

});

const server = http.createServer(app);

server.listen(config.port, config.host, () => {
 
  console.log(`Сервер запущен: порт( ${config.port} ), хост ( ${config.host} )...`);

});