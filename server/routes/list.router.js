const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "list" ("name", "quantity", "purchased")
        VALUES ($1, $2, $3);`;

    let queryArgs = [
        req.body.name,
        req.body.quantity,
        req.body.purchased
    ];

    pool.query(queryString, queryArgs)
        .then(function (dbRes) {
            res.sendStatus(201);
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500);
            
        });
});

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