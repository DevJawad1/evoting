import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    firstname:{type:String,require:[true,"Firstname is require"]},
    lastame:{type:String, require:[true,"Lasttname is require"]},
    email:{type:String, unique:true, require:[true,"Email is require"]},
    password:{type:String, require:[true,"Password is require"]}
})

const usermodal = mongoose.models.user || mongoose.model('user', userSchema);
export default usermodal