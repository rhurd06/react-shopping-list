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

//PUT Route
router.put('/:id', (req, res) => {
    let itemId = req.params.id;
    let boolean = req.body.boolean;
    let sqlText = '';
    if (boolean === 'true'){
    let sqlText = `UPDATE "list" SET "purchased"=true WHERE "id"=$1;`;
    } else {
        res.sendStatus(500);
        return;
    }
    pool.query(sqlText, [itemId])
    .then((resDB) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error with request', error);
        res.sendStatus(500);
    });
});


module.exports = router;