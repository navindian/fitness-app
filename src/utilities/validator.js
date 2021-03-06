let Validator = {};

Validator.validateempId = function (empId) {
    let pattern = new RegExp("^[1-9][0-9]{5}$");
    if ( !(pattern.test(empId))) {
        let err = new Error("Error in Employee Id");
        err.status = 406
        throw err;
    }
}
Validator.validatepassword = function (password) {
    let pattern = new RegExp("^[A-z][A-z 0-9]{7,15}$");
    if ( !(pattern.test(password))) {
        let err = new Error("Error in password");
        err.status = 406
        throw err;
    }
}

module.exports = Validator;