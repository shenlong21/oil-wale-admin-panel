var express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path')
var app = express();
var routes = require('./routes/routes')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', routes)
app.use(express.static(path.join(__dirname, '/static')))


app.listen(3000, () => {
    console.log('Server started at port 3000')
});
