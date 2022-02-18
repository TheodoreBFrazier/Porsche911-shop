const express = require("express");
const porsches = express.Router();
const { getAllPorsches } = require("../Queries/porsches")

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

module.exports = porsches;