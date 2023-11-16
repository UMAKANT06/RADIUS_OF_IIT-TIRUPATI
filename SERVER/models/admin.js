const { model, Schema, InferSchemaType } = require("mongoose");

const adminSchema = new Schema({
    adminId: {
        type: String,
        required: true,
        unique: true,
        length: 8,
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 200,
    },
    phoneNumber: {
        type: String,
        required: false,
        length: 10,
        unique: false,
    },
});

module.exports = model("Admin", adminSchema);