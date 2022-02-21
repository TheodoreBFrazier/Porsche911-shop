const db = require("../db/dbConfig.js");

const getAllGenerations = async() => {
    try {
        const allGenerations = await db.any("SELECT * FROM generations");
        return allGenerations;
    } catch (error) {
        return error;
    }
}

module.export = {
    getAllGenerations,
}
    