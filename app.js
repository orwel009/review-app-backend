const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const reviews = require("./models/review")
const {reviewModel} = require("./models/review")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/reviewDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    let review = new reviewModel(input)
    // console.log(review)
    review.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("Servrer Started")
})