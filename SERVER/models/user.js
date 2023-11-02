const { model, Schema,InferSchemaType } = require("mongoose");

const interestsSchema = new Schema({
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
});

const userSchema = new Schema({
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
    required: [true, 'Location is required'],
    unique: false,
    minlength: 2,
    maxlength: 100,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Phone number is required'],
    unique: true,
  },
  interest: {
    type: [interestsSchema],
    required: [true, 'Interest is required'],
  },
  rewards: {
    type: String,
  },
  projects: {
    type: [String],
  },
  leaderBoardRank: {
    type: Number,
  },
  clubs: {
    type: [String],
  },
  roomNumber: {
    type: Number,
    required: [true, 'Room number is required'],
    unique: true,
  },
  ratings: {
    type: String,
  },
  appointments: {
    type: String,
  },
});


module.exports = model(
    'User',
    userSchema
);