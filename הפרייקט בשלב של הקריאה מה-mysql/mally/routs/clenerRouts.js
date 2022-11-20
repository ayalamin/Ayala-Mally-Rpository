const express = require('express');
const cleanerServer = require('../service/cleanerServer');
const router = express.Router();

router.get('/', async (req, res) => {
    let result = await cleanerServer.getTenCleaners();
    console.log(result)
    res.send(result);
});

router.get('/:city/:expertise/:religion/:gender/:price', async (req, res) => {
    console.log("in the get specific routs")
    let result = await cleanerServer.getSpecificCleaner(req.params);
   console.log(result)
    res.send(result);
});

router.get('/sale', async (req, res) => {
    let result = await cleanerServer.getSale();
   console.log(result)
    res.send(result);
});

router.get('/:password/:username', async (req, res) => {
    try {
        console.log("in id");
        let result = await cleanerServer.getCleaner(req.params);
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});



router.post('/', async (req, res) => {
    try {
        console.log("------------------------------")//?
        await cleanerServer.PostCleaner(req.body);
        console.log("???????????????????")//?
        
        res.send('you have entered successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});
////////////////////////////////////////
router.put('/prefer', async (req, res) => {
    console.log(req.body);
    try {
        console.log("------------------------------")//?
        await cleanerServer.putPrefer(req.body);
        console.log("???????????????????")//?
        res.send('you have entered successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.post('/prefer', async (req, res) => {
    console.log(req.body);
    try {
        console.log("------------------------------")//?
        await cleanerServer.postPrefer(req.body);
        console.log("???????????????????")//?
        res.send('you have entered successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.get('/prefer',async (req, res) =>{
    console.log("chek if have data in get prefere")
    try {
    let result = await cleanerServer.getPrefer();
    res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
    console.log("chek if have data in get prefere")
   
});

/////////////////////////////////////////
/////////////////////////////////////////////////////
router.put('/:id/:name/:password/:city/:expertize/:religion/:gender/:price/:bunkNum/:branchNum/:bunkAcount/', async (req, res) => {
    try {
        console.log("------------------------------")
        await cleanerServer.PutCleaner(req.params);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.put('/:time/:day/:toChange', async (req, res) => {
    try {
        console.log("------------------------------")
        await cleanerServer.PutSchedule(req.params);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.delete('/:id', async (req, res) => {
    console.log("delete");
    let result = await cleanerServer.deleteCleaner(req.params.id);
   console.log("????");
    res.send(result);
});


module.exports = router;