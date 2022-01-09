var mongoose = require("mongoose");
var validator = require("validator");
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken");


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email required"],
        validate: [validator.isEmail, "Not a valid email"]
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

customerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 8)
})

// userSchema.methods.getJWTToken = function () {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET_ID, {
//         expiresIn: process.env.JWT_EXPIRE_DURATION,
//     });
// };

mongoose.model.export = mongoose.model("customer", customerSchema)