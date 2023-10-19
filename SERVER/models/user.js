import { model, Schema } from "mongoose";
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
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 8,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  location: {
    type: String,
    required: true,
    unique: false,
    minlength: 2,
    maxlength: 100,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  interest: {
    type: [interestsSchema],
    required: true,
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
    required: true,
    unique: true,
  },
  ratings: {
    type: String,
  },
  appointments: {
    type: String,
  },
});
