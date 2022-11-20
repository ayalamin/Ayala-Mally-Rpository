const db = require('./DB');

async function getDirector(director) {
    const data = await db.query(`select * from helper.director where name='${director.name}' and password=${director.password}`);
    return data;
}

async function getBills() {
    const data = await db.query(`select
    order.date,
    order.endPrice,
    cleaner.bunkNum,
    cleaner.branchNum,
    cleaner.bunkAcount
    from helper.cleaner
    join helper.order
       on cleaner.id = order.cleanerId
       where order.status = 0`)
    return data;
}

module.exports={
    getDirector,
    getBills
}