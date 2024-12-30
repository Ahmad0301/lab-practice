const mongoose = require ('mongoose')
const {Schema} = require('mongoose')

const userschema = new Schema(
    {
        username:{type:String,required:false},
        email:{type:String,required:false},
        password: {type:String,required:false},
        age: {type:Number ,required:false},
        role : {type:String,required:false},
    }
)

const user = mongoose.model('user' , userschema ,'person')
module.exports = user

// {
//     "username":"",
//     "email":"",
//     "password":"",
//     "age":"",
//     "role":"",

// }