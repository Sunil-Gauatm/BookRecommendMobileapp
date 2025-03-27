import { UserModel } from "../models/users.js";
import jwt from "jsonwebtoken"


const generateToken = (userid) =>{
   return jwt.sign({userid},"Secret123",{expiresIn: "20d"})
}

export const signup = async (req,res) =>{
    try {
        const{name, email, password} = req.body 
        if(!name|| !email || !password){
            return res.status(400).json({message : "All fields are required!", success : false})
        }
        if(password.length < 4){
            return res.status(400).json({message : "password length must be greater than 4 " , success:false})
        }
        if(name.length < 3){
            return res.status(400).json({message : "username length must be greater than 3 " , success:false})
        }
        const exisitnguser = await  UserModel.findOne({email})
        if(exisitnguser){
            return res.status(400).json({message : "User already exists", success : false})
        }

        const user = new UserModel({
            name,
            email,
            password
        })
        await user.save()

        const token = generateToken(user._id)

        res.status(201).json({
            token,
            user :{
                id : user._id,
                name: user.name,
                email : user.email
            },
            message: "Sign up Sucessfull!!",
            success: true

        })

    } catch (error) {
        res.status(500).json({message:"Internal Error!!",error  : error.message})
        
    }
}
export const login = async (req,res) =>{
    try {
        const{ email, password} = req.body 
        if(!email || !password){
            return res.status(400).json({message : "All fields are required!", success : false})
        }
        const user =  await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({message : "invalid email and password!!"})
        }
        if(!(user.password === password)){
            return res.status(400).json({message : "invalid email and password!!"})
        }

        

        const token = generateToken(user._id)

        res.status(200).json({
            token,
            user :{
                id : user._id,
                name: user.name,
                email : user.email
            },
            message: "Login  Sucessfull!!",
            success: true

        })

    } catch (error) {
        res.status(500).json({message:"Internal Error!!",error  : error.message})
        
    }
}

