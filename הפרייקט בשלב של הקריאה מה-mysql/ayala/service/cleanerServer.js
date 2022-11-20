const db = require('./DB');

async function getTenCleaners() {
    const data = await db.query(

        `select 
        cleaner.id,
        cleaner.name,
        cleaner.price,
        cities.name as city,
        gender.name as gender,
        religion.name as religion,
        expertise.name as expertise
        FROM helper.cleaner  
        join helper.cities
           on cleaner.city = cities.id
        join helper.gender
           on cleaner.gender = gender.id
        join helper.religion
           on cleaner.religion = religion.id
        join helper.expertise
           on cleaner.expertise = expertise.id
        limit 20`);
    return data;
}

async function getCleaner(pas) {
    console.log("hihi")
    const data = await db.query(`select * from helper.cleaner where password =${pas.password} and name =${JSON.stringify(pas.username)} `);
    console.log(data)
    return data;
}

async function getSpecificCleaner(cleaner) {
    console.log(`select * from helper.cleaner where city =${JSON.stringify(cleaner.city)} 
    and price=${cleaner.price} and timesInWeek=${cleaner.numOfTime} and gender=${JSON.stringify(cleaner.gender)} `)
    const data = await db.query(`select * from helper.cleaner where city =${JSON.stringify(cleaner.city)} 
    and price<${cleaner.price} and timesInWeek=${cleaner.numOfTime} and gender=${JSON.stringify(cleaner.gender)} `);
    console.log("after the fetch server")
    return data;
}
async function getSale() {
    console.log("sale")
    const data2 = await db.query(
        `SELECT
        cleaner.id,
        cleaner.name,
        cleaner.price,
        cities.name as city,
        gender.name as gender,
        religion.name as religion,
        expertise.name as expertise
        FROM helper.cleaner 
        join helper.cities
           on cleaner.city = cities.id
        join helper.gender
           on cleaner.gender = gender.id
        join helper.religion
           on cleaner.religion = religion.id
        join helper.expertise
           on cleaner.expertise = expertise.id
        where cleaner.sale =${true}`
    );
    console.log("its go")
    return data2;
}

// async function PostCleaner(person) {
//     console.log(person)
//     let a = 5;
//     //////////////////////////////////////////////////////////////////
//     await db.query(`insert into helper.cleaner values(${a},'${person.username}', ${person.password},${person.city} ,${person.expertise},${person.religion},${person.gender},
//                                                          ${person.price}, ${person.bankNum},${person.branchNum},${person.bankAcount},${false})`);
//     //////////////////////////////////////////////////////////////////
// }

async function PostCleaner(person) {
    console.log(person)
    let s = 4;
    let y = await db.query(`insert into helper.cleaner values(${s},'${person.username}',${person.password},${person.city},${person.expertise},
    ${person.religion}, ${person.gender},${person.price}, ${person.bankNum},${person.branchNum},${person.bankAcount},${true})`);
    console.log(y);
}




module.exports = {
    getCleaner,
    PostCleaner,
    getSpecificCleaner,
    getSale,
    getTenCleaners
}
