const db = require('./DB');

async function updatePoints(orderDetails){
   db.query(
   'UPDATE [LOW_PRIORITY] [IGNORE] helper.users SET points =' +orderDetails.price*0.15/* + ????*/  +'[WHERE '+orderDetails.password +' like password]' 
   );
}


async function postOrder(orderDetails){
    db.query('insert into helper.orders values('+orderDetails.password,orderDetails.number,
    orderDetails.amount,orderDetails.date,orderDetails.price+')');
}

module.exports={
    updatePoints,
    postOrder
}