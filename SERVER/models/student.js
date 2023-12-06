const { model, Schema,InferSchemaType } = require("mongoose");

const studentSchema = new Schema({
  rollNumber: {
    type: String,
    required: [true, "Roll number is requierd"],
    unique: true,
    minlength: 8,
    maxlength: 8,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    maxlength: 200,
  },
  location: {
    type: String,
    unique: false,
    minlength: 2,
    maxlength: 100,
  },
  phoneNumber: {
    type: Number,
    required: false,
    unique: false,
  },
  techClubs: {
    type: [String],
  },
  literaryClubs: {
    type: [String],
  },
  sportsClubs: {
    type: [String],
  },
  culturalClubs: {
    type: [String],
  },
  rewards: {
    type: String,
    unique: false,
  },
  projects: {
    type: [String],
    unique: false,
  },
  leaderBoardRank: {
    type: Number,
    unique: false,
  },
  clubs: {
    type: [String],
    unique: false,
  },
  roomNumber: {
    type: Number,
    unique: false,
  },
  ratings: {
    type: String,
    unique: false,
  },
  appointments: {
    type: String,
    unique: false,
  },
});


module.exports = model("Student", studentSchema);