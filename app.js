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

app.post("/view",(req,res)=>{
    reviewModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/search",(req,res)=>{
    let input = req.body
    reviewModel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input = req.body
    reviewModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Servrer Started")
})