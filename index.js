const express = require('express')
const mongoose= require('mongoose')
const app = express()
const Users = require('./schema/user')
const Items = require('./schema/item')


const userRoutes = require("./routes/user")
app.use("/user", userRoutes)

const itemRoutes = require("./routes/item")
app.use("/item", itemRoutes)

mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://admin:adminilsa@cluster0.qrwncm7.mongodb.net/test",{
    useNewurlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
})


app.get("/", (req, res)=>{
    res.send("Hello")
})
app.listen(3000,()=>{
    console.log("listening to the port 3000")
})