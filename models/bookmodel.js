const mongoose = require('mongoose')
const {Schema} = require ('mongoose')

const bookschema = new Schema
(
    {
        tittle:{type:String,required:false},
        author:{type:String,required:false},
        year:{type:Number,required:false},
        genre:{type:String,required:false},
        summary:{type:String,requird:false}

    }
)

const book = mongoose.model('book' , bookschema , 'Books')

module.exports = book

// {
//     "tittle":"",
//     "author":"",
//     "year":"",
//     "genre":"",
//     "summary":"",

// }