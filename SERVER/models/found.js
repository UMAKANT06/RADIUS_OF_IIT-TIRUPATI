const { model, Schema, InferSchemaType } = require("mongoose");

const foundSchema = new Schema({
  finderRollNo: {
    type: String,
    required: true,
    // unique: true,
    minlength: 8,
    maxlength: 8,
    ref: 'Student', //foreign key
  },

  dateAndTime: {
    type: Date,
    default: Date.now(),
  },

  currentStatus: {
    type: String,
    required: true,
    default: "Pending",
  },

  itemType: {
    type: String,
    required: true,
  },

  itemDescription: {
    type: String,
    //required: true,
  },

  attachments: {
    type: [String], // Assuming file paths or URLs for attachments
  },

  location: {
    type: String,
    required: true,
    unique: false,
    minlength: 2,
    maxlength: 100,
  },

  claimedByRollNo: {
    type: String,
    length: 8,
    ref: 'Student', //foreign key
    default: null,
  },

  dateReturned: {
    type: Date,
    default: null,
  },
});

module.exports = model(
  "Found",
  foundSchema
)