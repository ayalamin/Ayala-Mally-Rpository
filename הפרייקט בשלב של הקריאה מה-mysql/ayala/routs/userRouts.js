const express = require('express');
const userServer = require('../service/userServer');
const router = express.Router();

router.get('/', async (req, res) => {
    let result = await userServer.getAllUser();
    console.log(result)
    res.send(result);
});


router.get('/:password/:username', async (req, res) => {
    try {
        let result = await userServer.getUser(req.params);
        console.log(result);
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.get('/sign', async (req, res) => {
    try {
        let result = await userServer.getDataSign();
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        console.log("------------"+req.body.password);
        let result =   await userServer.PostUser(req.body);
       res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});


module.exports = router;