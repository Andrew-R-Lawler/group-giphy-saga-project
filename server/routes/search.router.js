const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/:query', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}`)
        .then((response) => {
            console.log('response', response);
            res.send(response.data)
        }).catch((err) => {
            console.log('error', err);
            res.sendStatus(500);
        })
})

module.exports = router;