import dbconnection from  '@dbconnection/dbconnection'
import usermodel from '@modals/userModel'
import { NextRequest, NextResponse } from 'next/server'
dbconnection()

export async function POST(NextResponse){
    try{
        const reqBody = await request.json();
        const {firstname, lastname, email, password}= reqBody
        console.log(reqBody);
        const user = user.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"}, {status:404})
        }
    }catch(err){
        console.log(err);
    }
}