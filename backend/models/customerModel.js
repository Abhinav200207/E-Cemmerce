var mongoose = require("mongoose");
var validator = require("validator");


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email required"],
        validate:[validator.isEmail,"Not a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password required"],
        select: false,
    },
    photo: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "customer"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})



mongoose.model.export = mongoose.model("customer",customerSchema)