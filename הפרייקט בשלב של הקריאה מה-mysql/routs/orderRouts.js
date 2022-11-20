const express = require('express');
const orderServer = require('../service/orderServer');
const router = express.Router();

//===============GET==================

router.get('/user/:id', async(req, res) => {
    try {
        console.log("in the get my order routs")
        let result = await orderServer.getAllUserOrders(req.params.id)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

})

router.get('/cleaner/:id', async(req, res) => {
    try {
        console.log("in the get my order routs")
        let result = await orderServer.getAllCleanerOrders(req.params.id)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.get('/scedule/:id', async(req, res) => {
    try {
        console.log("in the get scedule")
        let result = await orderServer.getScedule(req.params.id)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

})

//==================POST=================

// router.post('/order',(req,res)=>{//???????????????????
//     orderServer.postOrder(req.params.orderDetails)
// })

// router.post('/', (req, res) => {//?????????????????????
//     orderServer.postOrder(req.params.orderDetails)
// })

router.post('/scedule', async (req, res) => {
    try {
        console.log("scedule num 1")//?
        await orderServer.postScedule(req.body);
        console.log("after scedule num 1")//?
        res.send('you have entered successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

router.post('/finishOrder', (req, res) => {
    try {
        console.log("in  function finishOrder")
        orderServer.postOrder(req.body);
        console.log("in after function finishOrder")
        res.send("ההזמנה נוספה בהצלחה")
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.post('/response', async(req, res) => {
    try {
        console.log("in the post my order routs")
        let result = await orderServer.postResponse(req.body)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

//==================PUT===================

router.put('/status', (req, res) => {
    try {
        console.log("in  function updateStatus")
        orderServer.updateStatus(req.body);
        console.log("in after function updateStatus")
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.put('/scors',async(req, res) => {
    try {
        console.log("in  function updateScors");
        let result = await orderServer.updateScors(req.body);
        console.log("in after function updateScors");
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.put('/changeScedual', async (req, res) => {
    try {
        console.log("------------------------------")
        await orderServer.PutSchedule(req.body);//body or param ?
        console.log("???????????????????")
        res.send('you have updated successfuly');
    }
    catch (e) {
        console.error("the error is: " + e);
    }
});

module.exports = router;
