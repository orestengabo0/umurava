import express from "express";
import Challenge from "../models/challenge.model.js";
import { challengeValidator } from "../validators/challenge.validator.js";

const challengeRouter = express.Router();

challengeRouter.get("/", async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

challengeRouter.get("/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      res.status(404).send("Challenge not found.");
    }
    res.json(challenge);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

challengeRouter.post("/", async (req, res) => {
  const {error } = challengeValidator.createChallenge.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const {
      title,
      startDate,
      deadLine,
      moneyPrize,
      email,
      projectDescription,
      skillsNeeded,
      projectBrief,
      seniorityLevel,
      tasks,
      challengeStatus
    } = req.body;

    const newChallenge = new Challenge({
      title,
      startDate,
      deadLine,
      moneyPrize,
      email,
      projectDescription,
      skillsNeeded,
      projectBrief,
      seniorityLevel,
      tasks,
      challengeStatus
    });

    const createdChallenge = await newChallenge.save();
    res.status(201).json(createdChallenge);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server error occurred." });
  }
});

challengeRouter.put("/:id", async (req, res) => {
  const { error } = challengeValidator.updateChallenge.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      res.status(404).send("Challenge not found.");
    }
    const {
      title,
      startDate,
      deadLine,
      moneyPrize,
      email,
      projectDescription,
      skillsNeeded,
      projectBrief,
      seniorityLevel,
      tasks,
      challengeStatus,
    } = req.body;
    challenge.title = title;
    challenge.startDate = startDate;
    challenge.deadLine = deadLine;
    challenge.moneyPrize = moneyPrize;
    challenge.email = email;
    challenge.projectDescription = projectDescription;
    challenge.skillsNeeded = skillsNeeded;
    challenge.projectBrief = projectBrief;
    challenge.seniorityLevel = seniorityLevel;
    challenge.tasks = tasks;
    challenge.challengeStatus = challengeStatus;
    const updatedChallenge = await challenge.save();
    res.json(updatedChallenge);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

challengeRouter.delete("/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) {
      res.status(404).send("Challenge not found.");
    }
    res.send("Challenge removed.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

export default challengeRouter;
