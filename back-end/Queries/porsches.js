const db = require("../db/dbConfig.js");

const getAllPorsches = async () => {
    try {
        const allPorsches = await db.any("SELECT * FROM porsches");
        return allPorsches;
    } catch (error) {
        return error;
    }
}

const getPorsche = async (id) => {
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

const createPorsche = async (porsche) => {

    try {
        const postedPorsche = await db.one(
            "INSERT INTO porsches (model, year, color, generation, price, feature, is_new) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [porsche.model, porsche.year, porsche.color, porsche.generation, porsche.price, porsche.feature, porsche.is_new]
        )
        return postedPorsche;
    } catch (error) {
        return error;
    }
}

const deletePorsche = async (id) => {
    try {
        const deletedPorsche = await db.one(
            "DELETE FROM porsche WHERE id = $1 RETURNING *",
            id
        );
        return deletedPorsche
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllPorsches,
    getPorsche,
    createPorsche,
    deletePorsche
}