import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    firstname:{type:String,require:[true,"firstname is require"]},
    lastame:{type:String, require:[true,"firstname is require"]},
    email:{type:String, unique:true, require:[true,"firstname is require"]},
    password:{type:String, require:[true,"firstname is require"]}
})

const usermodal = mongoose.model.user || mongoose.model('user', userSchema)