const { model, Schema,InferSchemaType } = require("mongoose");

export const complainSchema = new Schema({
    complainerRollNo: {
        type: String,
        required: true,
        // unique: true,
        minlength: 8,
        maxlength: 8,
        ref: 'userDetails', //foreign key
      },
      date: {
        type: Date,
        default: Date.now,
      },
      currentStatusComplain: {
        type: String,
        required: true,
        default: false,
      },
      complainType: {
        type: String,
        required: true,
      },
      complaint: {
        type: String,
        required: true,
      },
      attachments: {
        type: [String], // Assuming file paths or URLs for attachments
      },
      hostelOrPlace: {
        type: String,
        required: true,
        unique: false,
        minlength: 2,
        maxlength: 100,
      },
});

export const complainerDetails = model(
    "complainerDetails",
     complainSchema
);



