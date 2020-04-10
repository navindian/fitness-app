const collection=require('../utilities/connection');
const EmployeeDb=[
    {
        empId:100001,
        firstName:"Noble",
        middleName:"Mathew",
        lastName:"Jose",
        mobileNumber:9878674532,
        city:"Mysore",
        mPin:657456,
        gender:"Male",
        age:24,
        height:165,
        weight:65,
        medicalHistory:"healthy",
        activityLevel:"high",
        occupation:"cccccccc",
        socialMode:"interactive",
        rewards:3,
        userName:"NobleJose",
        password:"abcd1234"
    },
    {
        empId:100002,
        firstName:"Varsha",
        middleName:"Elizbeth",
        lastName:"Jose",
        mobileNumber:9878672312,
        city:"Delhi",
        mPin:657256,
        gender:"Female",
        age:22,
        height:155,
        weight:50,
        medicalHistory:"healthy",
        activityLevel:"low",
        occupation:"aaaaaaaa",
        socialMode:"calm",
        rewards:5,
        userName:"VarshaeJose",
        password:"xyz1234"
    }
]

exports.setupDb=()=>{
    return collection.getEmployeeCollection().then((emp)=>{
        return emp.deleteMany().then(()=>{return emp.insertMany(EmployeeDb).then((data)=>{
            if(data){
                return "Insertion Succcessful"
            }
            else{
                let err=new Error("Insertion Failed");
                err.status=400;
                throw err;
            }
        })})
    })
}