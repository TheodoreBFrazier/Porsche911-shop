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
            "INSERT INTO porsches (name, image, year, color, description) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [porsche.name, porsche.image, porsche.year, porsche.color, porsche.description]
        )
        return postedPorsche;
    } catch (error) {
        return error;
    }
}

const deletePorsche = async (id) => {
    try {
        const deletedPorsche = await db.one(
            "DELETE FROM porsches WHERE id = $1 RETURNING *",
            id
        );
        return deletedPorsche;
    } catch (error) {
        return error;
    }
}

const updatePorsche = async (id, porsche) => {
    try {
        const updatedPorsche = await db.one(
            "UPDATE porsches SET name=$1, image=$2, year=$3, color=$4, generation=$5, price=$6, description=$7, featured=$8, is_new=$9, rating=$10, WHERE id=$11 RETURNING *",
            [porsche.name, porsche.image, porsche.year, porsche.color, porsche.generation, porsche.price, porsche.description, porsche.featured, porsche.is_new, porsche.rating, id]
        );
        return updatedPorsche;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllPorsches,
    getPorsche,
    createPorsche,
    deletePorsche,
    updatePorsche,
}