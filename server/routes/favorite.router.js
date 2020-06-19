const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('GET /api/favorite');
  pool.query('SELECT * FROM "favorites";')
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('Error GET /api/favorite');
      res.sendStatus(500);
    })
});

// add a new favorite 
router.post('/', (req, res) => {
  const gifUrl = req.body
  console.log('POST /api/favorite', gifUrl);
  pool.query(`INSERT INTO "favorites" ("gif_url")
  VALUES ($1)`, [gifUrl])
  .then((results) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error Post /api/favorite', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log('PUT /api/favorite');
  pool.query(`UPDATE "favorites"
  SET "category_id" = $1
  WHERE "id" = $2`, [req.body, req.params.favId])
  .then((results) => {
    console.log(results, 'results');
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error PUT /api/favorite', error);
    res.sendStatus(500);
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
