
var express = require('express');
var http = require('http');		
var path = require('path');

var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var busboy = require('connect-busboy');

var app = express(); 	
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(cookieParser('keyboard cat'));
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'jncsystem' ,cookie:{maxAge:60000 * 60}})); 
app.use(busboy());
app.use(flash()); 

require("./routes/route.js")(app); 

app.listen(port);
console.log('The magic happens on port ' + port);
