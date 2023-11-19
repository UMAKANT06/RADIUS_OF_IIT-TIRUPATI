const { model, Schema, InferSchemaType } = require("mongoose");

const userSchema = new Schema({
  id: {
    type: String,
    required: ['true', 'Id is required'],
    unique: true,
    length: 8,
  },
  name: {
    type: String,
    required: ['true', 'Name is required'],
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: ['true', 'Password is required'],
    minlength: 8,
    maxlength: 200,
  },
  userCategory: {
    type: String,
    enum: ['admin', 'student'],
    required: ['true', 'Type is required'],
  },
});

module.exports = model(
  "User",
  userSchema
)