const empdb=require('../model/empModel');
let employeeSerive={}
const validator=require('../utilities/validator');




//get details of all employees
employeeSerive.getAllEmployees=()=>{
    return empdb.getAllEmployees().then(data=>{
        if(data==null){
            let err=new Error("there are no registered users yet!");
            err.status=404;
            throw err;
        }
        else{
            return data;
        }
    })
}

//get detail of an employee based on empId
employeeSerive.getEmployeeById = ((employeeId) => {
    console.log(employeeId);
    return empdb.findEmployee(employeeId).then((emp) => {
        if (emp == null) {
            let err = new Error("Invalid employeeId!! Enter a valid employeeId to view Details");
            err.status = 404;
            throw err;
        } else {
                return emp;
        }
    })
})




//verify empId and password
employeeSerive.verify=(employeeId,password)=>{
    return empdb.findEmployee(employeeId).then((data)=>{
        if(data==null){
            let err=new Error("User not available!! please register")
            err.status=404;
            throw err
        }
        else {
          if(data.empId==employeeId){
              if(data.password==password){
                  return {"message":"Login Successful"};
              }
              else{
                  let err=new Error("Password is incorrect");
                  err.status=404;
                  throw err;
              }
          }
          else{
              let err=new Error("Authentication Failed");
              err.status=404;
              throw err;
          }
        }
    })
    }


//register employee
employeeSerive.addEmployee=((empObj)=>{
    console.log(empObj.empId);
    validator.validateempId(empObj.empId);
    validator.validatepassword(empObj.password);
    return empdb.findEmployee(empObj.empId).then(object=>{
        if(object!=null){
            let err= new Error("Employee already exist with the employeeID ");
            err.status=404;
            throw err;
        }else{
            return empdb.addEmployee(empObj).then((data)=>{
                if(data){
                return {"message": "Successfully registered employee with ID: "+data}
            }
                else{
                    let err= new Error("New Employee Data not Inserted");
                    err.status=500;
                    throw err;
                }
            })}})})

//delete employee
employeeSerive.deleteEmployee=(empId)=>{
    return empdb.deleteEmployee(empId).then(data=>{
        if(data){
            return {"message":"Deleted Employee with ID: "+data};
        }
        else{
            let err=new Error("Failed to delete the Employee");
            err.status=403;
            throw err;
        }
    })
}

module.exports=employeeSerive;