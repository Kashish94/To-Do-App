const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
const db = require('./config/mongoose');
const Item = require('./models/listitem');

//view engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.use(express.static(path.join(__dirname, 'assests')));

app.listen(port, function(err) {
    if (err) {
        console.log('Error in opening server');
        return;
    }
    console.log('server is serving');
    return;
})