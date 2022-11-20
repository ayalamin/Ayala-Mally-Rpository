const db = require('./DB');

//===================GET========================

async function getAllUserOrders(id) {

    const data = await db.query(
        `SELECT
        order.id as numberOfOrder,
        order.date,
        order.endPrice,
        order.times,
        order.status,
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
          where order.userId = ${id}
         order by helper.order.status  limit 100`
    );
    console.log("this my data")
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
      order.endPrice,
      order.status
        FROM helper.order 
        join helper.cleaner  
          on order.cleanerId = cleaner.id  
        join helper.users
           on order.userid = users.id
          where helper.order.cleanerId = ${id}
        order by helper.order.status limit 100`
    );
    console.log("this my data")
    return data;
}

async function getScedule(id) {
    const data = await db.query(
        `SELECT * from helper.scedule
          where cleanerId = ${id}`
    );
    return data;
}
//=================POST=================

// async function postOrder(orderDetails) {
//     db.query(
//         `insert into helper.order values(
//         default,
//         ${orderDetails.id},
//         '${orderDetails.date}',
//          ${orderDetails.price},
//          ${orderDetails.times},
//          ${orderDetails.cleanerId})`)
// }


async function postOrder(orderDetails) {
 
    db.query(
        `insert into helper.order values(
        default,
        ${orderDetails.userId},
        date(now()),
         ${orderDetails.item.price - orderDetails.useScorse},
         ${orderDetails.item.price},
         ${orderDetails.item.id},
         ${0},
         '${orderDetails.day}',
         ${orderDetails.time})`)
}

async function postScedule(person) {
    await db.query(
        `insert into helper.scedule values
        (default,${person.id},1 ,'f','f','f','f','f','f'),
        (default,${person.id},2 ,'f','f','f','f','f','f'),
        (default,${person.id},3 ,'f','f','f','f','f','f')`);
}

async function postResponse(detaile) {

    db.query(
        `insert into helper.response values(
            default,
            ${detaile.idOfCleaner},
            '${detaile.valText}',
            ${detaile.valSelect}
        )`
    )

}

//=================PUT=================

// async function updatePoints(orderDetails) {
//     db.query(
//         `UPDATE  helper.users 
//         SET points = ${points +orderDetails.price * 0.10  }
//         WHERE  password = ${orderDetails.password}`
//     );
// }


async function updateScors(pas) {
    console.log("in server updateScors")
    db.query(
        `UPDATE helper.users
         SET scors = ${pas.newScors}
        where id = ${pas.userId} `)
        console.log("in finish server updateScors" +  pas.newScors)
    }

async function updateStatus(pas) {
    console.log("in server updateStatus")
    db.query(
        `UPDATE helper.order
         SET status = ${pas.status}
        where order.id = ${pas.orderId}
        `)
}
async function PutSchedule(person) {
    const data = await db.query(
        `UPDATE helper.scedule SET 
        ${person.day1}='t'
        WHERE time=${person.time} 
        and cleanerId=${person.id}`);
    console.log("PutSchedule");
    return data
}

module.exports = {
    getAllUserOrders,
    getAllCleanerOrders,
    getScedule,
    postOrder,
    postResponse,
    postScedule,
    updateStatus,
    updateScors,
    PutSchedule
}