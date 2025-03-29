
import jwt from 'jsonwebtoken'
import {UserModel} from '../models/users.js'

export const protectRoute = async(req,res,next) =>{
    try {
        const token = req.header("Authorization").replace("Bearer ","")
        if(!token){
            return res.status(401).json({message: "No authenication token, access denied", success : false})
        }
        const decoded = jwt.verify(token , "Secret123")

        const user = await user.findById(decoded.userId).select("-password")

        if(!user) return res.status(401).json({message:"token is not valid"})

        req.user = user;
        next()


        
    } catch (error) {
        return res.status(500).json({message :"Token is not valid", error: error.message})
        
    }
}
