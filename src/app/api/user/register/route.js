import dbconnection from  '@/dbconnection/dbconnection'
import usermodal from '@/modals/userModel'
import { NextRequest, NextResponse } from 'next/server'
dbconnection()

export async function POST(NextRequest){
    try{
        const reqBody = await NextRequest.json();
        const {firstname, lastname, email, password}= reqBody
        console.log(reqBody);
        const user = await usermodal.findOne({email})
        if(user){
            console.log('user already exist');
            return  NextResponse.json({error:"User already exist"}, {status:400})
        }else{
            const newUser = new usermodal(reqBody)
            const saveuser = await newUser.save()
            if (saveuser){
                console.log('successfully signed up');
                return  NextResponse.json({message:"User successfully signed up"}, {status:true})
            }else{
                console.log('cant save user');
            }
        }
    }catch(err){
        console.error(err);
        return  NextResponse.json({ error: err.message });
    }
}