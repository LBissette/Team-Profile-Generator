class Employee {
    constructor(name, ID, email){
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        console.log(this.name)
    }
    getID() {
        console.log(this.ID)
    }
    getEmail() {
        console.log(this.email)
    }
    getRole() {
        console.log("Employee")
    }
};

module.exports = Employee;