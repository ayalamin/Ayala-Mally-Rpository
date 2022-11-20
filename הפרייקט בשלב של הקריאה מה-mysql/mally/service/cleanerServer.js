const db = require('./DB');

async function getTenCleaners() {
    const data = await db.query('select * from helper.cleaner limit 20');
    return data;
}

async function getCleaner(pas) {
    console.log("hihi")
    const data = await db.query(`select * from helper.cleaner where password =${pas.password} and name =${JSON.stringify(pas.username)} `);
    console.log(data)
    return data;
}

async function getSpecificCleaner(cleaner) {
    const data = await db.query(`select * from helper.cleaner where
     city =${(cleaner.city)} 
    and price<${cleaner.price} 
    and expertise=${cleaner.expertise}
    and religion=${cleaner.religion} 
    and gender=${(cleaner.gender)} `);
    return data;
}

async function getSale() {
    const data2 = await db.query(`select * from helper.cleaner where sale =1`);
    return data;
}

async function PostCleaner(person) {
    await db.query(`insert into helper.cleaner values(default, '${person.username}',.${person.password},${person.city} ,${person.expertise},${person.religion},${person.gender},
                                                         ${person.price}, ${person.bankNum},${person.branchNum},${person.bankAcount},${false})`);
}

async function putPrefer(person) {
    //////////////////////////////////////////////////////////////////
    await db.query(
    `UPDATE helper.prefere SET 
    city=${person.city},
    expertise=${person.expertise} ,
    religion=${person.religion},
    gender=${person.gender},
    finds=${person.finds},
    price=${person.price} where userId=1`);
    //////////////////////////////////////////////////////////////////
}

async function getPrefer() {
    console.log("ayala")
    //////////////////////////////////////////////////////////////////
    let data = await db.query(`select * from helper.prefere where userId = 1`)
    return data;
}

async function postPrefer(person) {
    //////////////////////////////////////////////////////////////////
    console.log( `insert into helper.prefere values(${person.a},${person.city},${person.expertise} ,${person.religion},${person.gender},${person.price},${person.finds})`)
    await db.query(
    `insert into helper.prefere values(${person.a},${person.city},${person.expertise} ,${person.religion},${person.gender},${person.price},${person.finds})`);
}

/////////////////////////////////////////////////////////////////////////
async function PutCleaner(person) {
    console.log(person)
    const data=await db.query(
    `UPDATE helper.cleaner SET name= '${person.name}',
     password= ${person.password},
     city= ${person.city},
     expertise= ${person.expertize},
     religion= ${person.religion},
     gender= ${person.gender},
     price= ${person.price},
     bunkNum= ${person.bunkNum},
     branchNum= ${person.branchNum},
     bunkAcount= ${person.bunkAcount}
     WHERE id=${person.id}`);
     return data
} 

async function PutSchedule(person) {
    console.log(` UPDATE helper.schedule SET ${person.day}=${person.toChange} WHERE time=${person.time}`)
    const data=await db.query(` UPDATE helper.schedule SET ${person.day}=${person.toChange} WHERE time=${person.time}`);
    console.log("jiji")
     return data
} 

async function deleteCleaner(id){
    console.log(`DELETE FROM CLEANER WHERE id=${id}`)
    await db.query(`DELETE FROM CLEANER WHERE id=${id}`);
    console.log("jiji")
     
}

module.exports = {
    putPrefer,
    postPrefer,
    getCleaner,
    PostCleaner,
    getSpecificCleaner,
    getSale,
    getTenCleaners,
    PutCleaner,
    PutSchedule,
    getPrefer,
    deleteCleaner
}
