var app = require('./App')
var dotenv = require("dotenv")
var connectDatabase = require("./db/database.js")


dotenv.config({ path: "backend/config/config.env" })
connectDatabase()


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})