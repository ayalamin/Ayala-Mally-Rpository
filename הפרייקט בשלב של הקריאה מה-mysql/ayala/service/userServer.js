const db = require('./DB');

async function getAllUser(){
    console.log("jiiiiiiiiiiii")
const data = await db.query('select * from helper.Users ');
//console.log(data);
return data;
}

async function getUser(pas){
    const data = await db.query(`select * from helper.Users where password =${pas.password} And name ='${(pas.username)}'  `);
    return data;
}

/////////////////////////
async function PostUser(person){
    let a = 17;
 let y=   await db.query(`insert into helper.Users values(${a},'${person.username}', '${person.email}',${parseInt(person.password)} ,'${person.adress}',${person.building})`);
console.log(y);
}
/////////////////////////

async function getDataSign(){
    const cities = await db.query('select cities.name from helper.cities');
    const gender = await db.query('select gender.name from helper.gender');
    const religion = await db.query('select religion.name from helper.religion');
    return [cities,gender,religion];
}

module.exports = {
    getAllUser,
    getUser,
    PostUser,
    getDataSign
}
