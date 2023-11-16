import { errorHandler } from "../api/utils/errorHandler.js";
import User from "../models/user.js";
import bcryptjs from 'bcryptjs';
export const signup=async(req,res,next)=>{
try{
    
    const {username,email,password}=req.body

    const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashPassword});
     await newUser.save();
     res.status(200).json("user created succesfully");
    }
    catch(error)
    {
       next(error)
    }
}