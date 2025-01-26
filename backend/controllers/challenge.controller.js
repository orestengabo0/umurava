import express from "express";
import Challenge from "../models/challenge.model.js";

const challengeRouter = express.Router();

challengeRouter.get("/", async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json(challenges);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})

challengeRouter.get("/:id", async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if(!challenge) {
            res.status(404).send("Challenge not found.");
        }
        res.json(challenge);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})

challengeRouter.post("/", async (req, res) => {
  try {
    const {
      title,
      deadLine,
      duration,
      moneyPrize,
      email,
      projectDescription,
      projectBrief,
      tasks,
    } = req.body;
    const newChallenge = new Challenge({
      title,
      deadLine,
      duration,
      moneyPrize,
      email,
      projectDescription,
      projectBrief,
      tasks,
    });
    const createdChallenge = await newChallenge.save();
    res.status(201).json(createdChallenge);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

challengeRouter.put("/:id", async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if(!challenge) {
            res.status(404).send("Challenge not found.");
        }
        const {
            title,
            deadLine,
            duration,
            moneyPrize,
            email,
            projectDescription,
            projectBrief,
            tasks,
        } = req.body;
        challenge.title = title;
        challenge.deadLine = deadLine;
        challenge.duration = duration;
        challenge.moneyPrize = moneyPrize;
        challenge.email = email;
        challenge.projectDescription = projectDescription;
        challenge.projectBrief = projectBrief;
        challenge.tasks = tasks;
        const updatedChallenge = await challenge.save();
        res.json(updatedChallenge);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})

challengeRouter.delete("/:id", async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndDelete(req.params.id);
        if(!challenge) {
            res.status(404).send("Challenge not found.");
        }
        res.send("Challenge removed.");
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})

export default challengeRouter;
