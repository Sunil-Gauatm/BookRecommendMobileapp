import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
        },
        email :{
            type : String,
        },
        password : {
            type: String,
        }
    },{
        timestamps : true
    })

export const  UserModel = mongoose.model("User" , userSchema)


