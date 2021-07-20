var express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path')
var app = express();
var routes = require('./routes.js')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')))


app.listen(3000);
