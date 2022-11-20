const db = require('./DB');

async function getAllUser() {
    console.log("jiiiiiiiiiiii")
    const data = await db.query('select * from helper.Users ');
    //console.log(data);
    return data;
}

async function getUser(pas) {
    const data = await db.query(`select * from helper.Users where password =${pas.password} And name =${JSON.stringify(pas.username)}  `);
    return data;
}

/////////////////////////
async function PostUser(person) {
    console.log(`insert into helper.users values(default,'${person.username}' '${person.email}',${person.password} ,'${person.adress}',${person.building})`)
    let y = await db.query(`insert into helper.users values(default,'${person.username}' ,'${person.email}',${person.password} ,'${person.adress}',${person.building})`);
    console.log(y);
}

async function getAlert(person) {
    console.log("in getttttt")
    let data = await db.query(`SELECT * FROM helper.prefere 
    where city=${person.city}
     AND expertise=${person.expertise} 
     AND religion=${person.religion} 
     AND gender=${person.gender} 
     AND price>${person.price}
     AND finds<6`);
    console.log("after getttttt")
    return data;
}

async function putAlert(person) {
    console.log(` id=${person.userId}`)
    let data = await db.query(`UPDATE helper.users SET alert="A suitable assistant has been found for you" WHERE id=${person.userId}`);
    console.log("after puttttttt")
    return data;
}
/////////////////////////

async function getDataSign() {
    const cities = await db.query('select cities.name from helper.cities');
    const gender = await db.query('select gender.name from helper.gender');
    const religion = await db.query('select religion.name from helper.religion');
    return [cities, gender, religion];
}

async function getAlertUser(id) {
    console.log("in getttttt")
    let data = await db.query(`SELECT * FROM helper.users 
    where alert="A suitable assistant has been found for you" AND id=1`);
    console.log(data);
    console.log(data[0].alert)
    return data;
}

async function PutUser(person) {
    console.log(person)
    const data = await db.query(
        `UPDATE helper.users SET 
     name= '${person.name}',
     password= ${person.password},
     alert= '${person.email}',
     adress= '${person.adress}',
     buildingNumber= ${person.building}
     WHERE id=${person.id}`);
    return data
}



module.exports = {
    getAllUser,
    getUser,
    PostUser,
    getDataSign,
    putAlert,
    getAlert,
    getAlertUser,
    PutUser
}
