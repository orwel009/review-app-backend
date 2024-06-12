const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.post("/add",(req,res)=>{
    let input = req.body
    console.log(input)
    res.send("Adde page")
})

app.listen(8080,()=>{
    console.log("Servrer Started")
})