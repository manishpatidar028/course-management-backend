const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes=require('./routes');
let connectDB = require('./config/dbConfig');

require('dotenv').config();

// DB connection init
connectDB();

const app = express();
const  PORT  = process.env.PORT || 3000;
app.use(cors());

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});