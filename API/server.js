const express = require('express')
const mongoose = require('mongoose')
const recordRoute = require("./routes/Record.route.js")
const finacialRoute = require("./routes/Finacial_aid.route.js")
const jobRoute = require("./routes/Jobs.route.js")
const userRoute = require("./routes/User.route.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : false}))


//routes
app.use("/records",recordRoute)
app.use("/finacials",finacialRoute)
app.use("/jobs",jobRoute)
app.use("/users",userRoute)

mongoose.connect("mongodb+srv://Worker:hardWorker@eworker.mckxgmh.mongodb.net/DB?retryWrites=true&w=majority&appName=eWorker")
    .then(() => {
        console.log("Connect to database")
        app.listen(3000, () => {
            console.log("Server Running on port 3000")
        });
    })
    .catch(() => {
        console.log("Connection failed")
    });

