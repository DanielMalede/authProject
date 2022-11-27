const mongoose = require('mongoose')

const schema = mongoose.Schema

const Users = new schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:Number,required:true},
})

module.exports = mongoose.model('Users',Users)