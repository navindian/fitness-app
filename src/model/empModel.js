const dbModel=require('../utilities/connection');
const employeeModel={};


//get all employee details
employeeModel.getAllEmployees= () =>{
    return dbModel.getEmployeeCollection().then(model=>{
        return model.find().then(data=>{if(data){return data;}
    else{
        return null;
    }})
    })
}



//check whether a given empId is registered
employeeModel.findEmployee = (employeeId) => {
    return dbModel.getEmployeeCollection().then((model) => {
       
        return model.findOne({ "empId": employeeId }).then((employee) => {
           
            if (employee) {  return employee }
            else {return null};
        })
    })
}

//delete an employee based on id
employeeModel.deleteEmployee=(empId)=>{
    return dbModel.getEmployeeCollection().then((model) => {
        return model.deleteOne({"empId":empId}).then(deleted=>{
            if(deleted.n>0) return empId;
            else return null; 
        })
    })
}



// add new employee details
employeeModel.addEmployee=(empObj)=>{
    return dbModel.getEmployeeCollection().then(model=>{
        return model.create(empObj).then((insertedData)=>{
            if(insertedData){
                return insertedData.empId;
            }
            else{
                return null;
            }
        })
    })
}




module.exports=employeeModel;