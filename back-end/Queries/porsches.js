const db = require("../db/dbConfig.js");

const getAllPorsches = async () => {
    try {
        const allPorsches = await db.any("SELECT * FROM porsches");
        return allPorsches;
        } catch (error) {
            return error;
        }
}

module.exports = {
    getAllPorsches,
}