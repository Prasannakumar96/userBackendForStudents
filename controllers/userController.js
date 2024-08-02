require("dotenv").config()

const userSchema = require("../schema/userSchema")
var CryptoJS = require("crypto-js");
const bcrypt = require("bcrypt")


exports.createUserController = async (req,res) => {
    try {

        const {email , password} = req.body
        const findStudent = await userSchema.find({email:email})


        if(findStudent[0]?._id) return {msg :"User already created"}
            else{

                const hash = await bcrypt.genSalt()

                const data = await userSchema.create({
                    ...req.body,
                    password:await bcrypt.hash(password,hash)
                })

                return data

            }
    } catch (error) {
        return error
    }
}


exports.getUser = async(req,res) => {
    try {
        const string = 'U2FsdGVkX1+R40da3iEJxWcFEupSm9XEs4yi6M6YWbGviWb5nmAISirSC2r02kziX8dKViuHOqSSGQInIJHS5TniznDcklxaaAZpB/rv/i9zi5Z+kxUsIax2iIodcVmk'

        var bytes  = CryptoJS.AES.decrypt(string, process.env.cryptoSecret);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        return JSON.parse(originalText)
    } catch (error) {
        return error
    }
}


exports.loginUser = async(req,res) => {
    try {
        const {email,password} = req.body

        const findStudent = await userSchema.find({email : email})

        if(!findStudent[0]?._id) return {msg : "user not registered"}

        else {

            const comparePassword = await bcrypt.compare(password , findStudent[0]?.password)

            console.log(comparePassword)

            if(!comparePassword) return {msg : "Password incorrect"}
            else{

                const obj = {
                    userId :  findStudent[0]?._id,
                    email : findStudent[0]?.email,
                    name :  findStudent[0]?.name
                }
                var token = CryptoJS.AES.encrypt(JSON.stringify(obj), process.env.cryptoSecret).toString();

                return token
            }
        }
    } catch (error) {
        return error
    }
}