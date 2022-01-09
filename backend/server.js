var app = require('./App')
var dotenv = require("dotenv")
var connectDatabase = require("./db/database.js")

process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`uncaughtException`)
})


dotenv.config({ path: "backend/config/config.env" })
connectDatabase()


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message} `)
    console.log(`unhandledRejection`)

    server.close(() => {
        process.exit(1)
    })
})