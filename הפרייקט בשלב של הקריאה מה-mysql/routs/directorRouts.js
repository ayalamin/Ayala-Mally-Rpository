const express = require('express');
const directorServer = require('../service/directorServer');
const router = express.Router();

router.get('/:password/:name', async (req, res) => {
    try {
        
        let result = await directorServer.getDirector(req.params);
        console.log("kk")
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.get('/bills', async (req, res) => {
    try {
        
        let result = await directorServer.getBills();
        console.log("kk")
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});


module.exports = router;