const db = require('./DB');

async function updatePoints(orderDetails) {
    db.query(
        'UPDATE [LOW_PRIORITY] [IGNORE] helper.users SET points =' + orderDetails.price * 0.15/* + ????*/ + '[WHERE ' + orderDetails.password + ' like password]'
    );
}


async function postOrder(orderDetails) {
    db.query(
        `use helper;
        insert into helper.order values(
            ${1},${orderDetails.id}, '${orderDetails.date}',${orderDetails.price}
            ,${orderDetails.times} ,${orderDetails.cleanerId})`
    )
    console.log(orderDetails);
}

async function updateStatus(pas)
{
    db.query(
        `UPDATE helper.order
         SET status = ${pas.status}
        where order.id = ${pas.orderId}
        `
    )
}


async function postResponse(detaile)
{
    console.log( `insert into helper.response values(default,${detaile.idOfCleaner},${detaile.valText},${detaile.valSelect})`)
    
    db.query(
        `insert into helper.response values(default,${detaile.idOfCleaner},'${detaile.valText}',${detaile.valSelect})`
    )
}


async function getAllUserOrders(id) {

    const data = await db.query(
        `SELECT
        order.id as numberOfOrder,
        order.date,
        order.endPrice,
        order.times,
        cleaner.name,
        cleaner.price,
        cleaner.id,
        cities.name as city,
        gender.name as gender,
        religion.name as religion,
        expertise.name as expertise
        FROM helper.order 
        join helper.cleaner  
          on order.cleanerId = cleaner.id  
        join helper.cities
           on cleaner.city = cities.id
        join helper.gender
           on cleaner.gender = gender.id
        join helper.religion
           on cleaner.religion = religion.id
        join helper.expertise
           on cleaner.expertise = expertise.id
          where helper.order.userId = ${id}`
    );
    console.log("this my data")
    console.log(data)
    return data;
}

async function getAllCleanerOrders(id) {

    const data = await db.query(
    `SELECT
    order.id as numberOfOrder,
      order.date,
      users.name,
      users.adress,
      users.buildingNumber,
      order.times,
      order.endPrice
        FROM helper.order 
        join helper.cleaner  
          on order.cleanerId = cleaner.id  
        join helper.users
           on order.userid = users.id
          where helper.order.cleanerId = ${id}`
    );
    console.log("this my data")
    console.log(data)
    return data;
}



module.exports = {
    updatePoints,
    postOrder,
    getAllUserOrders,
    getAllCleanerOrders,
    updateStatus,
    postResponse
}