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
    try {
        console.log("------------");
        let result =   await userServer.PostUser(req.body);
        console.log("??????????");
       res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.put('/alert', async (req, res) => {
    try {
        console.log("------------");
        let result =   await userServer.getAlert(req.body);
        console.log(result);
        result.map(async (item)=>{
        await userServer.putAlert(item);
        })
        res.send("the alert was added successfuly")

        console.log("??????????");
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.get('/alert', async (req, res) => {
    try {
        console.log("------------");
        let result =   await userServer.getAlertUser(req.params);
        console.log(result.alert);
        console.log("??????????");
        res.send(result);
        
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});


router.put('/:id/:name/:password/:email/:adress/:building', async (req, res) => {
    try {
        console.log("------------------------------")
        await userServer.PutUser(req.params);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});


module.exports = router;