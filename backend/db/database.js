var mongoose = require('mongoose');


const connectDatabase = () => {
    return mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`Connected to database ${data}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase
