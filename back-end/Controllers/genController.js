const express = require("express");
const generations = express.Router();
const { getAllGenerations, getOneGeneration } = require("../Queries/generations")



generations.get("/", async (request, response) => {
    try {
        const allGenerations = await getAllGenerations();
        if (allGenerations[0]) {
            response.status(200).json(allGenerations);
        } else {
            response.status(400).json({ error: "server error" });
        }
    } catch (error) {
        console.log(error)
    }
})

generations.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const generation = await getOneGeneration(id);
        if (generation.id) {
            response.status(200).json(generation)
        } else {
            response.status(404).json({ error: "server error!" })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = generations;