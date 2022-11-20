const express = require('express');
const orderServer = require('../service/orderServer');
const router = express.Router();

router.put('/order',(req,res)=>{
    orderServer.updatePoints(req.params);
});

router.post('/order',(req,res)=>{
    orderServer.postOrder(req.params.orderDetails)
})

module.exports = router;