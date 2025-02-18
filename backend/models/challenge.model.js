import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [5, "Title must be at least 5 characters long."],
      maxlength: [100, "Title must not exceed 100 characters."]
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v < new Date();
        },
        message: (props) => `Start date must be a past date.`
      }
    },
    deadLine: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v > new Date();
        },
        message: (props) => `Deadline must be a future date.`
      }
    },
    duration: {
      type: Number,
      min: [1, "Duration must be at least 1 day."]
    },
    moneyPrize: {
      type: Number,
      required: true,
      min: [1, "Prize must be at least 1 unit."],
      validate: {
        validator: Number.isInteger,
        message: "Prize must be an integer value."
      }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`
      }
    },
    projectDescription: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Project description must contain at least one item."
      }
    },
    skillsNeeded: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Skills needed must contain at least one item."
      }
    },
    projectBrief: {
      type: String,
      required: true,
      maxlength: [60, "Project brief must not exceed 60 characters."]
    },
    seniorityLevel: {
      type: [String],
      required: true,
      enum: ["Junior", "Intermediate", "Senior"],
      default: []
    },
    tasks: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Tasks must contain at least one item."
      }
    },
    challengeStatus: {
      type: String,
      required: true,
      enum: ["Completed", "Uncompleted", "Ongoing"],
      default: "Uncompleted"
    }
  },
  { timestamps: true }
);

challengeSchema.pre("save", function (next) {
  if (this.startDate && this.deadLine) {
    const start = new Date(this.startDate);
    const end = new Date(this.deadLine);
    const diff = end - start;
    this.duration = Math.ceil(diff / (1000 * 3600 * 24));
  }
  next();
});

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
