const express = require('express');
const cityServer = require('../service/cityServer');
const router = express.Router();

router.get('/:city', async (req, res) => {
    let result = await cityServer.getCityCleaners(req.params.city);
    res.send(result);
});

router.get('/', async (req, res) => {
    try {
        let result = await cityServer.getAllCityCleaners();
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});



module.exports = router;