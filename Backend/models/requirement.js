const Mongoose=require("mongoose");
const Schema=Mongoose.Schema

const ReqSchema=new Schema({
    
    reqname : {
        type : String,
        required : true
    },
    area: {
        type : String,
        required : true
    },

    institution: {
        type :String,
        required : true
    },
    catagory: {
        type : String,
        required : true
    },

    hours : {
        type : Number,
        required : true
    },
    imgpath : {
        type : String,
        required : true
    },
    date:{
        type:Date
    }
     
});
let ReqModel=Mongoose.model("requirements",ReqSchema);
module.exports=ReqModel;