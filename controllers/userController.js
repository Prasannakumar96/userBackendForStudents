const userSchema = require("../schema/userSchema")


exports.createUserController = async (req,res) => {
    try {
        const data = await userSchema.create(req.body)

        return data
    } catch (error) {
        return error
    }
}


exports.getUser = async(req,res) => {
    try {

        const {email} = req.body
        const data = await userSchema.find({email : email})

        return data
    } catch (error) {
        return error
    }
}