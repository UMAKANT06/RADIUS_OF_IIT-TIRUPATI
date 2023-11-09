import { model, Schema,InferSchemaType } from "mongoose";
export const foundSchema = new Schema({
    finderRollNo: {
        type: String,
        required: true,
        // unique: true,
        minlength: 8,
        maxlength: 8,
      },

      dateAndTime: {
        type: Date,
        default: Date.now,
      },
      currentStatus: {
        type: String,
        enum: foundItemStatuses,
        required: true,
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
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 8,
        ref: 'userDetails', //foreign key
      },

      dateReturned: {
        type: Date,
        default: null,
      },
});

export const finderDetails = model(
    "finderDetails",
     foundSchema
);