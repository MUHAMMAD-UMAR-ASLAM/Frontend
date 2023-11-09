import User from "../models/user.js";
import bcryptjs from 'bcryptjs';
export const signup=async(req,res)=>{
try{
    console.log(req.body)
 
   
    const {username,email,password}=req.body
     const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username,email,password:hashPassword});
     await newUser.save();
     res.status(200).json("user created succesfully");
    }
    catch(error)
    {
        res.status(500).json(error.message);
    }
}