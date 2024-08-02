const express = require("express")

const { createUserController, getUser, loginUser } = require("../controllers/userController")


const router  = express()

router.get("/",(req,res)=> {
    res.send("hi")
})


router.post("/createUser",async (req,res)=>{
try {

  const data =  await createUserController(req,res)
    console.log(data)
  res.send(data)
} catch (error) {
    console.log(error);
}

})

router.post("/getUser",async(req,res)=>{
    const data = await getUser(req,res)

    res.send(data)
})

router.post("/login",async(req,res)=>{
    const data = await loginUser(req,res)


    res.send(data)
})
module.exports = {userRouter : router }