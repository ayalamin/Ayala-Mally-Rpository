const express = require('express');
const cleanerServer = require('../service/cleanerServer');
const router = express.Router();


//==========לא קורה אף פעם
router.get('/ten', async (req, res) => {
    let result = await cleanerServer.getTenCleaners();
   // console.log(result)
    res.send(result);
});

router.get('/:city/:price/:numOfTime/:gender', async (req, res) => {
    console.log("in the get specific routs")
    let result = await cleanerServer.getSpecificCleaner(req.params);
   console.log(result)
    res.send(result);
});

router.get('/sale', async (req, res) => {
    console.log("in the get specific routs")
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
    console.log(req.body);
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




module.exports = router;