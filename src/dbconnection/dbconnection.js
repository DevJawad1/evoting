import mongoose from "mongoose";

export const dbconnection = async()=>{
   mongoose.connect(process.env.MONGO_URL).then(result=>{
    console.log('mongoo db connected');
   }).catch((err)=>{
    console.log(err);
   })
}