const express = require('express');
const orderServer = require('../service/orderServer');
const router = express.Router();

router.put('/', (req, res) => {
    try {
        orderServer.updatePoints(req.params);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});


router.put('/status', (req, res) => {
    try {
        orderServer.updateStatus(req.body);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.post('/', (req, res) => {
    orderServer.postOrder(req.params.orderDetails)
})

router.get('/user/:id', async(req, res) => {
    try {
        console.log("in the get my order routs")
        let result = await orderServer.getAllUserOrders(req.params.id)
        console.log(result)
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
        console.log(result)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

router.post('/response', async(req, res) => {
    try {
        console.log("in the post my order routs")
        let result = await orderServer.postResponse(req.body)
        console.log(result)
        res.send(result);
    }
    catch (e) {
        console.error("the error is: " + e);
    }

});

module.exports = router;