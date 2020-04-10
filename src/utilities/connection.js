const {Schema}=require("mongoose");
const Moongoose=require("mongoose");
Moongoose.Promise=global.Promise;
Moongoose.set('useCreateIndex',true);
const url="mongodb://localhost:27017/Employee";
const collection={};

const employeeSchema=Schema({
empId:{type:Number,required:true,unique:true},
firstName:{type:String,required:true},
middleName:{type:String},
lastName:{type:String,required:true},
mobileNumber:{type:Number,required:true},
city:{type:String,required:true},
mPin:{type:Number,required:true},
gender:{type:String},
age:{type:Number},
height:{type:Number},
weight:{type:Number},
medicalHistory:{type:String},
activityLevel:{type:String},
occupation:{type:String},
socialMode:{type:String},
rewards:{type:Number},
userName:{type:String},
password:{type:String,minLength:[7,"password should have atleast 7 characters"],maxLength:[15,"password should not exceed 15 characters"]},
},{collection:"Employee"});

collection.getEmployeeCollection=()=>{
    return Moongoose.connect(url,{useNewUrlParser:true}).then((database)=>
    {return database.model('Employee',employeeSchema)
}).catch(()=>{
    let err=new Error("Could not connect to employee Collection Database");
    err.status=500;
    throw err;

})
}

module.exports=collection;
