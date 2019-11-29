const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
}
module.export = Manager;