const express = require('express')
const mongoose = require('mongoose')
const productRoute = require("./routes/product.route.js")
const finacialRoute = require("./routes/Finacial_aid.route.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : false}))


//routes
app.use("/api/product",productRoute)
app.use("/finacials",finacialRoute)

mongoose.connect("mongodb+srv://Worker:hardWorker@eworker.mckxgmh.mongodb.net/employees?retryWrites=true&w=majority&appName=eWorker")
    .then(() => {
        console.log("Connect to database")
        app.listen(3000, () => {
            console.log("Server Running on port 3000")
        });
    })
    .catch(() => {
        console.log("Connection failed")
    });

