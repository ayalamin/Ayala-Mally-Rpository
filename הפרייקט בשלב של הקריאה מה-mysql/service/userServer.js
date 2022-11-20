const db = require('./DB');


//=====================GET===================

// async function getAllUser() {
//     console.log("jiiiiiiiiiiii")
//     const data = await db.query('select * from helper.Users ');
//     //console.log(data);
//     return data;
// }

async function getUser(pas) {
    const data = await db.query(`select * from helper.Users where password =${pas.password} And name =${JSON.stringify(pas.username)}  `);
    return data;
}


async function getAlert(person) {
    console.log("in getttttt")
    let data = await db.query(
        `SELECT * FROM helper.prefere 
    where city=${person.city}
     AND expertise=${person.expertise} 
     AND religion=${person.religion} 
     AND gender=${person.gender} 
     AND price>${person.price}
     AND find < 6`);
    console.log("after getttttt")
    return data;
}

async function getDataSign() {
    const cities = await db.query('select * from helper.cities');
    const gender = await db.query('select * from helper.gender');
    const religion = await db.query('select * from helper.religion');
    const expertise = await db.query('select * from helper.expertise');
    return [cities, gender, religion, expertise];
}


async function getAlertUser(pas) {
    console.log("in getttttt")
    let data = await db.query(
        `SELECT * 
    FROM helper.users 
    where alert="A suitable assistant has been found for you" 
    AND id=${pas.id}`);
    return data;
}


//=====================POST===================

async function PostUser(person) {
    console.log(`insert into helper.users values(default,'${person.username}' '${person.email}',${person.password} ,'${person.adress}',${person.building})`)
    let y = await db.query(
        `insert into helper.users values(default,
            '${person.username}' ,
            '${person.email}',
            ${person.password} ,
            '${person.adress}',
            ${person.building},default,default)`);
    console.log(y);
    return y;
}

//=====================PUT===================



async function DeleteAlert(person) {
    console.log(` IN DeleteAlert SERVER`)
    let data = await db.query(
    `update helper.users SET 
    alert="" 
    where id=${person.id}`);
    console.log(` IN  after DeleteAlert SERVER`)
    return data;
}

async function putAlert(person) {
    console.log(` id=${person.userId}`)
    let data = await db.query(
        `UPDATE helper.users 
    SET alert="A suitable assistant has been found for you" 
    WHERE id=${person.userId}`);
    console.log("after puttttttt")
    return data;
}


async function PutUser(person) {
    console.log(person)
    const data = await db.query(
        `UPDATE helper.users SET 
     name= '${person.username}',
     password= ${person.password},
     email= '${person.email}',
     adress= '${person.adress}',
     buildingNumber= ${person.building}
     WHERE id=${person.id}`);
    return data
}

module.exports = {
    // getAllUser,
    getUser,
    getDataSign,
    getAlert,
    getAlertUser,
    PostUser,
    putAlert,
    PutUser,
    DeleteAlert
}