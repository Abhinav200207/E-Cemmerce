var mongoose = require('mongoose'); // Importing Mongoose


// this callback function will connect to database
const connectDatabase = () => {
    return mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`Connected to database ${data}`) // log this statement if connection is successful
    })
}

module.exports = connectDatabase
