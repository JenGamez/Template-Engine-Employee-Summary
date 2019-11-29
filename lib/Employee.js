class Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    return this.name;
}

getID() {
    return this.id;
}

getemail() {
    return this.email;
}

getRole () {
    return "Employee";
} 

}

module.export = Employee;