import { model, Schema,InferSchemaType } from "mongoose";
export const lostSchema = new Schema({
    reporterRollNo: {
        type: String,
        required: true,
        //unique: true,
        minlength: 8,
        maxlength: 8,
        ref: 'userDetails', //foreign key
    },

    dateAndTime: {
        type: Date,
        default: Date.now,
    },

    currentStatus: {
        type: String,
        enum: lostItemStatuses,
        required: true,
      },

    itemType: {
        type: String,
        required: true,
      },

    itemDescription: {
        type: String,
        required: true,
      },

    attachments: {
        type: [String], // Assuming file paths or URLs for attachments
    },

    location: {
        type: String,
        //required: true,
      },

});

export const reporterDetails = model(
    "reporterDetails",
     lostSchema
);