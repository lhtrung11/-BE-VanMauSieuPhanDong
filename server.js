const dotenv = require('dotenv');
// USING DOTENV
dotenv.config();

const { connectDB } = require('./configs/db');
const constant = require('./constants');
const route = require('./routers');
const express = require('express');
const expressValidator = require('express-validator');
const cors = require('cors');

// CONNECT TO DATABASE
connectDB();

// APP INIT
const app = express();
app.use(cors());
app.use(express.json());
route(app);

app.listen(constant.variable.env.port, () => {
    console.log(`server is running on port ${constant.variable.env.port}`);
});
