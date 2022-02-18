const { response } = require("express");
const express = require("express");
const porsches = express.Router();
const { getAllPorsches, getPorsche } = require("../Queries/porsches")

//REMEMBER TO RUN PSQL SEED AND SCHEMA COMMANDS!!!

porsches.get("/", async (request, response) => {
    try {
        const allPorsches = await getAllPorsches()
        if(allPorsches[0]){
            response.status(200).json(allPorsches);
        } else {
            response.status(500).json({error: "server error"})
        }
    } catch (error) {
        console.log(error)
    }
})

porsches.get("/:id", async (request, response ) => {
    const { id } = request.params;
    try {
        const porsche = await getPorsche(id);
        if (porsche.id) {
            response.status(200).json(porsche)
        } else {
            response.status(404).json({error: "server error"})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = porsches;