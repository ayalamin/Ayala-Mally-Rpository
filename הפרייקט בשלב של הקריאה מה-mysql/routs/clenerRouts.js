const express = require('express');
const cleanerServer = require('../service/cleanerServer');
const router = express.Router();

//================GET=================

router.get('/ten', async (req, res) => {//??????????????????????????
    let result = await cleanerServer.getTenCleaners();
    res.send(result);
});

// router.get('/', async (req, res) => {//????????????????????????????????
//     let result = await cleanerServer.getTenCleaners();
//     res.send(result);
// });

router.get('/:city/:expertise/:religion/:gender/:price', async (req, res) => {
    console.log("in the get specific routs")
    let result = await cleanerServer.getSpecificCleaner(req.params);
    console.log("finish the get specific routs")
    res.send(result);
});


router.get('/sale', async (req, res) => {
    console.log("in the get specific routs")
    let result = await cleanerServer.getSale();
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

router.get('/:id/:name/:password', async (req, res) => {
    try {
        console.log("in resp");
        let result = await cleanerServer.getResp(req.params);
        let a = 0;
        let count = 0;
        result[1].forEach(item=>{
            a = a+item.rate;
            count++;
        })
        result[1].rate = a/count;
        console.log("the rate is: "+result[1].rate)
        console.log("the res is: "+result[0].Text)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.get('/:id', async (req, res) => {
    console.log("chek if have data in get prefere")
    try {
        let result = await cleanerServer.getPrefer(req.params);
        console.log(result)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }
    console.log("chek if have data in get prefere")

});
//================POST=================

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

//================PUT=================

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
    console.log("its work in putPrefer")
});


router.put('/sale',async (req, res) =>{
    try{
        console.log("no update")
        console.log("id is: "+req.body.id)
        let result =await cleanerServer.putSale(req.body);
        console.log("its update")
        res.send(result);
    }
    catch(e){
        console.error("the error is: " + e);
    }
})


router.put('/:id', async (req, res) => {
    try {
        console.log("in put cleaner routs")
        await cleanerServer.PuttCleaner(req.body);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
})

// router.put('/:time/:day/:toChange', async (req, res) => {
//     try {
//         console.log("------------------------------")
//         await cleanerServer.PutSchedule(req.params);//body or param ?
//         console.log("???????????????????")
//         res.send('you have updated successfuly');
//     }
//     catch (e) {
//         console.error("the error is: " + e);
//     }
// });


router.put('/delete/Cleaner', async (req, res) => {  
    console.log("start delete cleaner");
    try {
        let result = await cleanerServer.deleteCleaner(req.body);
        console.log("finish delete cleaner");  
        res.send(result);
    }
    catch(e)
    {
        console.log("this error" + e)
    }
});


module.exports = router;
