const express = require("express")
const {json , urlencoded} = require("express")

const mongoose = require("mongoose")
const { userRouter } = require("./routes/userROute")
const { createUserController } = require("./controllers/userController")


mongoose.connect("mongodb+srv://prasanna:coding@codingschool.jdgssfe.mongodb.net/").then(()=>console.log("Mongodb connected successfully")).catch((err)=>console.log(err))

const app = express()

app.use(json(),urlencoded({extended : false}))





app.use("/users",userRouter)



app.listen(1000,()=>console.log("Server running on port 1000"))