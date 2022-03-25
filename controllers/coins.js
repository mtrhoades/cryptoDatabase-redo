// IMPORTS/DEPENDENCIES
const router = require('express').Router()


// INDEX ROUTE ('/coins') (GET, read route)
router.get('/', (req, res) => {
    res.send('This is the index of coins list route - /coins')
});


module.exports = router