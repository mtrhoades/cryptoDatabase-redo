// IMPORTS/DEPENDENCIES
const express = require('express');
const router = require('express').Router(); // importing express for the controller and setting to a variable
const coinDB = require('../models/coin.js')

// INDEX ROUTE ('/coins') (GET, read route)
router.get('/', (req, res) => {
    res.render('coins/index')
});


module.exports = router;