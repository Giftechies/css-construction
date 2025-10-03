const mongoose = require("mongoose")

const subSkipHireSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{type:String,required:true},
    shortContent:{type:String,required:true},
    content:{type:String,required:true},
    image:{type:String,required:true},
    imageAlt:{type:String,required:true},
    metaTitle:{type:String,required:true},
    metaDiscripation:{type:String,required:true},
    metaKeywords:{type:String,required:true},
   
}) 

const subSkipHire = mongoose.model("subSkipHire",subSkipHireSchema)

module.exports = subSkipHire;