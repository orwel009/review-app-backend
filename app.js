const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/add",(req,res)=>{
    res.send("Adde page")
})
