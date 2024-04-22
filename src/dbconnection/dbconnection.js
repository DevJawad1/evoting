import mongoose from "mongoose";

const dbconnection = async()=>{
   mongoose.connect(process.env.MONGO_URL).then(result=>{
    console.log('mongoo db connected');
   }).catch((err)=>{
    console.log(err);
   })
}

export default  dbconnection