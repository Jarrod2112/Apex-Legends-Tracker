// Node.js framework allows to setup middlewares to respond to HTTP Requests.
const express = require('express');
// Node.js HTTP request logger that simplifies requests.
const morgan = require('morgan');
// Creates secret keys without them going public.
const dotenv = require('dotenv');

//Load config.env, used to access throughtout entire application.
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Profile route connected to path where it is held. 
// Node.js Require() allows for seperation within this application.
app.use('/api/v1/profile', require('./routes/profile'));

// Handele production
if(process.env.NODE_ENV === 'production'){
// Set static folder
app.use(express.static(__dirname + '/public/'));
}

// Handle SPA
app.get(/.*/, (req, res) => res.sendfile(__dirname + '/public.index.html'));

// To find environmental variable below.
// If not found it would run on port 8000.
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});