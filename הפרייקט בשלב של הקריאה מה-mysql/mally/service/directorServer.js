const db = require('./DB');

async function getDirector(director) {
    const data = await db.query(`select * from helper.director where name='${director.name}' and password='${director.password}'`);
    return data;
}
module.exports={
    getDirector}