var mongoose = require('mongoose');


const connectDatabase = () => {
    return mongoose.connect(process.env.MONGO_URIggit).then((data)=>{
        console.log(`Connected to database ${data}`)
    })
}

module.exports = connectDatabase
