const express = require("express");
const generations = express.Router

const { getAllGenerations } = require("../Queries/generations")

generations.get("/", async (request, response) => {
    try {
        const allGenerations = await getAllGenerations();
        if(allGenerations[0]) {
            response.status(200).json(allGenerations);
        } else {
            response.status(400).json({ error: "server error"});
        }
    } catch (error) {
        console.lof(error)
    }
})

module.exports = generations;