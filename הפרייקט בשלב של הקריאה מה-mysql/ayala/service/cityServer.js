const db = require('./DB');

async function getCityCleaners(place)
{
    const data = await db.query(`select * from cleaners where city = ${JSON.stringify(place)}`);
    return data;
}


async function getAllCityCleaners()
{
    
    const data = await db.query("select * from cleaners");
    return data;
}

module.exports = {
    getCityCleaners,
    getAllCityCleaners
}

