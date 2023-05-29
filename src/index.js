const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const {URI, PORT} = process.env


const routerCard = require("./routes/CardRouter")
const routerCustomer = require("./routes/CustomerRouter")

const app = express()
app.use(express.json())
app.use('/', routerCard)
app.use('/', routerCustomer)

app.listen(PORT, () => {
    console.log("Server start on PORT: ", (PORT))
})

mongoose.connect(URI)
    .then(() => console.log("Database is connected...."))
    .catch((error) => console.log(error.message))

