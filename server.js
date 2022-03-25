// DEPENDENCIES
const express = require('express'); // importing express framework


// CONFIGURATION
require('dotenv').config(); // importing  dotenv configuration
const PORT = process.env.PORT; // variable for the port # in .env file.
const app = express(); // variable for express required above.


// COINS CONTROLLER ROUTE
const coinsController = require('./controllers/coins.js'); // import controller/coins.js file
app.use('/coins', coinsController); // use '/coins' as the path


// ROUTES (initial route)
app.get('/', (req, res) => { // -' / '- home route
  res.send('Welcome to an Awesome App about cryptocurrencies!')
});


// 404 ROUTE (error page)
app.get('*', (req, res) => {
    res.status(404).send('<h1>ERROR 404 NOT FOUND!, GO BACK!</h1>')
});


// LISTEN
app.listen(PORT, () => { // server listen 
  console.log('nomming at port', PORT);
});