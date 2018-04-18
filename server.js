// const express = require('express');
// const path = require('path');
// const serveStatic = require('serve-static');

// const app = express();

// app.use(serveStatic(__dirname + "/dist"));
// const  port = process.env.PORT || 5000;

// app.listen(port);
// console.log('server started '+ port);


var history = require('connect-history-api-fallback');

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
//add this middleware
app.use(history());
app.use(serveStatic(__dirname + "/dist"))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port) 