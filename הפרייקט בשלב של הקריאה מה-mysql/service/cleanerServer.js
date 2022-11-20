const db = require('./DB');

//==================GET================

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
           where cleaner.isDelited = ${false} 
           order by rand() limit 8`);/////////////
    return data;
}


async function getCleaner(pas) {
    console.log("hihi")
    const data = await db.query(
    `select 
        cleaner.id,
        cleaner.name,
        cleaner.password,
        cleaner.price,
        cities.name as city,
        gender.name as gender,
        religion.name as religion,
        expertise.name as expertise,
        cleaner.bunkNum,
        cleaner.branchNum,
        cleaner.bunkAcount,
        cleaner.sale,
        cleaner.isDelited,
        cities.id as cityId,
        gender.id as genderId,
        religion.id as religionId,
        expertise.id as expertiseId
     from helper.cleaner
     join helper.cities
        on cleaner.city = cities.id
     join helper.gender
        on cleaner.gender = gender.id
     join helper.religion
        on cleaner.religion = religion.id
     join helper.expertise
        on cleaner.expertise = expertise.id
         where password =${pas.password} and 
         cleaner.name =${JSON.stringify(pas.username)} and   
         cleaner.isDelited = ${false} `);
    return data;
}



async function getSpecificCleaner(cleaner) {
    const data = await db.query(
    `select 
    cleaner.id,
    cleaner.name,
    cleaner.price,
    cleaner.bunkNum,
    cleaner.branchNum,
    cleaner.bunkAcount,
    cleaner.sale,
    cities.name as city,
    gender.name as gender,
    religion.name as religion,
    expertise.name as expertise
     from helper.cleaner 
     join helper.cities
        on cleaner.city = cities.id
     join helper.gender
        on cleaner.gender = gender.id
     join helper.religion
        on cleaner.religion = religion.id
     join helper.expertise
        on cleaner.expertise = expertise.id
    where city =${(cleaner.city)} 
    and price<${cleaner.price} 
    and expertise=${cleaner.expertise}
    and religion=${cleaner.religion} 
    and gender=${(cleaner.gender)} 
    and  isDelited = ${false}
    order by rand() limit 15`);
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
        where cleaner.sale =${true} 
        and cleaner.isDelited = ${false} 
        order by rand() limit 15`
    );
    console.log("its go")
    return data2;
}

async function getPrefer(pas) {
    let data = await db.query(
        `select * from helper.prefere 
    where userId = ${pas.id}`)
    return data;
}


async function getResp(pas) {
    let res = await db.query(
        `SELECT  response.Text
    FROM helper.response 
    left join helper.cleaner 
    on response.idOfCleaner = cleaner.id
    where response.Text != ''
    and cleaner.id=${pas.id}
    order by rand() limit 15`)

    let rate = await db.query(
        `SELECT  response.rate
        FROM helper.response 
        left join helper.cleaner 
        on response.idOfCleaner = cleaner.id
        where response.rate != ${0}
        and cleaner.id=${pas.id}`)
    console.log(rate)
    console.log(res)
    return [res, rate]
}
//=================POST==============


async function PostCleaner(person) {
    await db.query(`insert into helper.cleaner values
    (default, 
   '${person.username}',
    ${person.password},
    ${person.city} ,
    ${person.expertise},
    ${person.religion},
    ${person.gender},
    ${person.price}, 
    ${person.bankNum},
    ${person.branchNum},
    ${person.bankAcount},
    default,
    default,
    default)`);
}

async function postPrefer(person) {

    await db.query(
        `insert into helper.prefere values(
        ${person.id},
        ${person.expertise} ,
        ${person.religion},
        ${person.gender},
        ${person.price},
        ${person.finds},
        ${person.city})`)
}


//=================PUT==============
async function putPrefer(person) {/////לא גמור
    await db.query(
        `UPDATE helper.prefere SET 
    city=${person.city},
    expertise=${person.expertise} ,
    religion=${person.religion},
    gender=${person.gender},
    find=${person.finds},
    price=${person.price} 
    where userId=${person.id}`);

}

async function PuttCleaner(person) {

    console.log(

        `in PutCleaner :  
        UPDATE helper.cleaner SET 
    name= '${person.name}',
    password= ${person.password},
    city= ${person.city},
    expertise= ${person.expertise},
    price= ${person.price},
    bunkNum= ${person.bunkNum},
    branchNum= ${person.branchNum},
    bunkAcount= ${person.bunkAcount}
    WHERE id=${person.id}`)

    const data = await db.query(
        `UPDATE helper.cleaner SET 
     name= '${person.name}',
     password= ${person.password},
     city= ${person.city},
     expertise= ${person.expertise},
     religion= ${person.religion},

     price= ${person.price},
     bunkNum= ${person.bunkNum},
     branchNum= ${person.branchNum},
     bunkAcount= ${person.bunkAcount}
     WHERE id=${person.id}`);
    return data
}

async function putSale(pas) {
    console.log(pas.id)
    await db.query(
        `UPDATE helper.cleaner SET 
        sale = ${1},
        price = price*0.8
        where id = ${pas.id}`);
}

// async function PutSchedule(person) {//???מה זה
//     const data = await db.query(
//         `UPDATE helper.schedule SET 
//         ${person.day}=${person.toChange} 
//         WHERE time=${person.time}`);
//     console.log("PutSchedule")
//     return data
// }


async function deleteCleaner(pas) {
    console.log(
        `in deleteCleaner in server id is: ${pas.id}`
    )
    await db.query(
        `UPDATE helper.cleaner SET
     password = ${0},
     isDelited = ${true}
     where id=${pas.id}`);
    console.log("delete Cleaner")
}

module.exports = {
    getTenCleaners,
    getCleaner,
    getSale,
    getSpecificCleaner,
    getPrefer,
    PostCleaner,
    postPrefer,
    putPrefer,
    PuttCleaner,
    // PutSchedule,
    putSale,
    deleteCleaner,
    getResp
}
