import mongoose, { mongo } from "mongoose"; 
import bcrypt from 'bcrypt'
const userSchema = mongoose.Schema({
    firstname:{type:String,require:[true,"Firstname is require"]},
    lastame:{type:String, require:[true,"Lasttname is require"]},
    email:{type:String, unique:true, require:[true,"Email is require"]},
    password:{type:String, require:[true,"Password is require"]}
})

let saltround = 10
userSchema.pre('save', function(next){
    console.log(this.isNew);
    if(this.isNew){
        bcrypt.hash(this.password, saltround, (err, hash)=>{
            if(err){
                console.log('error occur when hashing', err);
              }
              else{
                this.password  = hash;
                console.log(this.password, ' password hash');
                next()
              }
        })
    }
})

userSchema.methods.comparePassword = async function(userpassword){
    try {
        const user = await bcrypt.compare(userpassword, this.password);
        return user;
    } catch (error) {
        console.error(err);
        return false;
    }
}
const usermodal = mongoose.models.user || mongoose.model('user', userSchema);
export default usermodal