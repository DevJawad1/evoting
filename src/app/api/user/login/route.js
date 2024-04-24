import dbconnection from  '@/dbconnection/dbconnection'
import usermodal from '@/modals/userModel'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
dbconnection()
export async function POST(NextRequest){
    const reqBody = await NextRequest.json();
    const {email, password}= reqBody
    try {
      let user  = await usermodal.findOne({email})
      if(user){
        let confirmpassword = await user.comparePassword(password)
        if(confirmpassword){
            return  NextResponse.json({message:"User found", status:true})
        }else{
            return  NextResponse.json({error:"Incorrect password"}, {status:400})
        }
      }else{
        return  NextResponse.json({error:"User not found"}, {status:400})
      }
    } catch (error) {
        console.log(error);
        return  NextResponse.json({ error: error.message }, { status: 500 });
    }

}