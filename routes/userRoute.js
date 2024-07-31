const express = require("express")

const { createUserController, getUser } = require("../controllers/userController")


const router  = express()

router.get("/",(req,res)=> {
    res.send("hi")
})


router.post("/createUser",async (req,res)=>{
try {

  const data =  await createUserController(req,res)
    
  res.send(data)
} catch (error) {
    console.log(error);
}

})

router.post("/getUser",async(req,res)=>{
    const data = await getUser(req,res)

    res.send(data)
})


module.exports = {userRouter : router }