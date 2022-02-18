const db = require("../db/dbConfig.js");

const getAllPorsches = async () => {
    try {
        const allPorsches = await db.any("SELECT * FROM porsches");
        return allPorsches;
    } catch (error) {
        return error;
    }
}

const getPorsche  = async (id) => {
    try {
        const onePorsche = await db.one(
            "SELECT * FROM porsches WHERE id=$1",
            id
        )
        return onePorsche
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllPorsches,
    getPorsche
}