const express = require('express'); //manggil library express js
const bodyParser = require('body-parser'); //manggil library body parser
const app=express(); //fungsi global memanggil express js

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);


app.listen(3000, () => {
    console.log(`Server started on port`);
});