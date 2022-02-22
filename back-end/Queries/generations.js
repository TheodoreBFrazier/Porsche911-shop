const db = require("../db/dbConfig.js");

const getAllGenerations = async () => {
    try {
        const allGenerations = await db.any("SELECT * FROM generations");
        return allGenerations;
    } catch (error) {
        return error;
    }
}

const getOneGeneration = async (id) => {
    try {
        const oneGeneration = await db.one("SELECT * FROM generations WHERE id=$1", id);
        return oneGeneration;
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllGenerations,
    getOneGeneration
}
