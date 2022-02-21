const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const app = express();
const db = require('./configs/db');
const route = require('./routes');
const methodOverride = require('method-override');


db.connect()


//static files
app.use(express.static(path.join(__dirname, 'public')))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


// dùng các midleware để parse body cho resquest gửi lên sever
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

route(app);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('App listening at: http://localhost:' + port)
})