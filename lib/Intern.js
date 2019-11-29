const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        // must use the word "super" to call the constructor of your parent class, which is whatever you type after extend.  
        super(name, id, email);

        //  Since we have a new school parameter, we need to do the below"
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.export = Intern;