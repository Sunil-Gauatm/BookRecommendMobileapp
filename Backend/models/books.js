import { number, ref, required } from "joi";
import mongoose from "mongoose";

const books = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    caption :{
        type : String,
        required: true
   },
   image :{
    type: String,
    required: true
   },
   rating:{
    type: number,
    required: true,
    min:1,
    max:5
   },
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
   }
    
},{
    timestamps : true
})