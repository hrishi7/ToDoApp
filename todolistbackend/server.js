const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();
app.use(cors());

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({extended: false}));

//call mongodb method

const mongoDB = require('./config/db');
mongoDB();

//routes
app.use('/api', require('./routes/index'));

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server is running on port ${port}`))
