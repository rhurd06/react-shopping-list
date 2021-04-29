const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET (Johnny)
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM list;';
    pool.query(queryText).then(result => {
        //Sends back the results in an object
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error getting list', error);
        res.sendStatus(500);
    })
})


module.exports = router;