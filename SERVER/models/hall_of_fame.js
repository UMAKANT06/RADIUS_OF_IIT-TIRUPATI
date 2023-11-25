const { model, Schema,InferSchemaType } = require("mongoose");

export const hall_fameSchema = new Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true,             /// Primary key
        minlength: 8,
        maxlength: 8,

        ref: 'userDetails', //foreign key
      },

    //   dateAndTime: {
    //     type: Date,
    //     default: Date.now,
    //   },

    //   description: {
    //     type: String,
    //     required: true,
    //   },

    //   competition: {
    //     type: String,
    //     required: true,
    //   },

    //   eventDate: {
    //     type: Date,
    //     required: true,
    //   },

    //   achievements: {
    //     type: [String],
    //   },
      
});

export const hall_fameDetails = model(
    "hall_fameDetails",
    hall_fameSchema
);