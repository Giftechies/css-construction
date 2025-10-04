const mongoose = require("mongoose")
const { title } = require("process")


const  serviceCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    featureImage:{
        type:String,
        required:true

    }
})

const  serviceCategoryModel = mongoose.models.serviceCategory || mongoose.model("serviceCategory",serviceCategorySchema)

export default serviceCategoryModel