const db = require('./DB');

// async function getCityCleaners(place)
// {
//     const data = await db.query(`select * from cleaners where city = ${JSON.stringify(place)}`);
//     return data;
// }


// async function getAllCityCleaners()
// {
    
//     const data = await db.query("select * from cleaners");
//     return data;
//}


async function getDataSign() {
    const cities = await db.query('select cities.name from helper.cities');
    const gender = await db.query('select gender.name from helper.gender');
    const religion = await db.query('select religion.name from helper.religion');
    return [cities, gender, religion];
}

module.exports = {
    getDataSign
}

