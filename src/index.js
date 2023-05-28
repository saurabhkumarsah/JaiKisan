const express = require("express")
const mongoose = require('mongoose')

const url = 'mongodb+srv://saurabhsahofficial:21mnzpvnAgVXlrm5@cluster0.gmkmd42.mongodb.net/saurabh-Jaikisan'
const routerCard = require("./routes/CardRouter")
const routerCustomer = require("./routes/CustomerRouter")

const app = express()
app.use(express.json())
app.use('/', routerCard)
app.use('/', routerCustomer)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server start on PORT: ", (process.env.PORT || 3000))
})

mongoose.connect(url)
    .then(() => console.log("Database is connected...."))
    .catch((error) => console.log(error.message))

