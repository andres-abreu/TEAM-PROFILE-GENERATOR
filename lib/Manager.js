const Employee = require("./Employee")

class Manager extends Employee  {
    //const
    constructor(name,id,email,officeNumber) {
        //parent constructor
        super(name,id,email)

        this.officeNumber = officeNumber
    }

    //Methods
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager