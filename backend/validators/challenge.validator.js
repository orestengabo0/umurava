import Joi from "joi";

export const challengeValidator = {
  createChallenge: Joi.object({
    title: Joi.string().required(),
    startDate: Joi.date()
      .required()
      .less("now")
      .messages({
        "date.less": "Start date must be a past date.",
      }),
    deadLine: Joi.date()
      .required()
      .greater(Joi.ref("startDate"))
      .messages({
        "date.greater": "Deadline must be after the start date.",
      }),
    moneyPrize: Joi.number().integer().min(1).required().messages({
      "number.min": "Prize must be at least 1 unit.",
    }),
    email: Joi.string().email().required(),
    projectDescription: Joi.array().items(Joi.string()).min(1).required(),
    skillsNeeded: Joi.array().items(Joi.string()).min(1).required(),
    projectBrief: Joi.string().max(60).required(),
    seniorityLevel: Joi.array()
      .items(Joi.string().valid("Junior", "Intermediate", "Senior"))
      .required(),
    tasks: Joi.array().items(Joi.string()).min(1).required(),
    challengeStatus: Joi.string()
      .valid("Completed", "Uncompleted", "Ongoing")
      .required(),
  }),

  updateChallenge: Joi.object({
    title: Joi.string(),
    startDate: Joi.date().less("now").messages({
      "date.less": "Start date must be a past date.",
    }),
    deadLine: Joi.date().greater(Joi.ref("startDate")).messages({
      "date.greater": "Deadline must be after the start date.",
    }),
    moneyPrize: Joi.number().integer().min(1).messages({
      "number.min": "Prize must be at least 1 unit.",
    }),
    email: Joi.string().email(),
    projectDescription: Joi.array().items(Joi.string()).min(1),
    skillsNeeded: Joi.array().items(Joi.string()).min(1),
    projectBrief: Joi.string().max(60),
    seniorityLevel: Joi.array().items(Joi.string().valid("Junior", "Intermediate", "Senior")),
    tasks: Joi.array().items(Joi.string()).min(1),
    challengeStatus: Joi.string().valid("Completed", "Uncompleted", "Ongoing"),
  }),
};
