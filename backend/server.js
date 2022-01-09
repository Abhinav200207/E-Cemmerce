var app = require('./App') // importing App.js file which contains all the routes
var dotenv = require("dotenv") // for using secret variables
var connectDatabase = require("./db/database.js") // connecting to database

// uncaughtException when some non syntactical statement is writen 
// in program then this uncaughtException will raise and tell the
// admin that whats the problem this will only happen during development
// phase so this is just for debugging purposes
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`uncaughtException`)
})


// .config file contains some imp and secret variables
// which should not be disclose to public so what does this 
// bellow statement do is that it will import those variables without
// revealing the correct variables
dotenv.config({ path: "backend/config/config.env" })

// this function will call tha function which connect our server to the server
// to our database
connectDatabase()


// this is ususal way of listening to server on port
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})


// unhandledRejection will occur when we have some incorrect values 
// in our file such sa PORT number or Mongo db coonection variables
// this will automatically close the server when this situation occur 
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message} `)
    console.log(`unhandledRejection`)

    server.close(() => {
        process.exit(1)
    })
})