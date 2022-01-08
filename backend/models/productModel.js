var mongoose = require("mongoose")
const { required } = require("nodemon/lib/config")

var productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name required"]
    },
    description:{
        type:String,
        required:[true,"product description required"]
    },
    price:{
        type:Number,
        required:[true,"product price required"],
        maxLength:[8,"Cannot be more than 8 character"]
    },
    reting:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    catogery:{
        type:String,
        required:[true,"product catogery required"]
    },
    Stock:{
        type:String,
        required:[true,"product stock required"],
        maxLength:[8,"Stock cannot exceed 4 character"],
        default:1
    },
    numOfreviews:{
        type:String,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

mongoose.exports = mongoose.model("Product",productSchema);