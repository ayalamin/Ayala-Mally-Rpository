const express = require('express');
const userServer = require('../service/userServer');
const router = express.Router();

//=================GET=======================

// router.get('/', async (req, res) => {
//     let result = await userServer.getAllUser();
//     console.log(result)
//     res.send(result);
// });


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

router.get('/:id', async (req, res) => {
    try {
        let result =   await userServer.getAlertUser(req.params);
        if(result){
            res.send(result);
        }
        else{
            res.send("doesnt have new alerts");
        }
        
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});
//================POST====================

router.post('/', async (req, res) => {
    console.log("------------");

    try {

        let result =   await userServer.PostUser(req.body);
        console.log("after sign in server")
    res.json(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

 //=================PUT===================

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

router.put('/:id/:name/:password/:email/:adress/:building', async (req, res) => {
    try {
        console.log("------------------------------")
        await userServer.PutUser(req.body);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.put('/deleteAlert', async (req, res) => {
    try {
        console.log("in DeleteAlert start")
        let result = await userServer.DeleteAlert(req.body);
        console.log("in DeleteAlert end")
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});


module.exports = router;