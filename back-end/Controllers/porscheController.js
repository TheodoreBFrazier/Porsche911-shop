const express = require("express");
const porsches = express.Router();
const { getAllPorsches, getPorsche, createPorsche, deletePorsche } = require("../Queries/porsches")

//REMEMBER TO RUN PSQL SEED AND SCHEMA COMMANDS!!!

// // const generationsControllers = require("./genController")

// porsches.use("/:porsches/generations", generationsControllers)

porsches.get("/", async (request, response) => {
    try {
        const allPorsches = await getAllPorsches()
        if (allPorsches[0]) {
            response.status(200).json(allPorsches);
        } else {
            response.status(500).json({ error: "server error!" })
        }
    } catch (error) {
        console.log(error)
    }
})

porsches.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const porsche = await getPorsche(id);
        if (porsche.id) {
            response.status(200).json(porsche)
        } else {
            response.status(404).json({ error: "server error" })
        }
    } catch (error) {
        console.log(error)
    }
})

porsches.post("/", async (request, response) => {
    const { body } = request;
    try {
        const createdPorsche = await createPorsche(body);
        if (createdPorsche.id) {
            response.status(200).json(createdPorsche)
        } else {
            response.status(500).json({ error: "Your Porsche didn't post" })
        }
    } catch (error) {
        console.log(error)
    }
})

porsches.delete("/:id", async (request, response) => {
const { id } = request.params;
const deletedPorsche = await deletePorsche(id)
if (deletedPorsche.id) {
    response.status(200).json(deletedPorsche)
} else {
    response.status(404).json({error: "Porsche not found!"})
}
})

module.exports = porsches;