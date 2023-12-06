const { model, Schema,InferSchemaType } = require("mongoose");

const hall_fameSchema = new Schema({
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

module.exports = model(
    "hallOfFame",
    hall_fameSchema
);