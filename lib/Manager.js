

const Employee = require("./Employee");

// Manager has all properties as employee due to the "extends" keyword (name, email, id, )
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        // "super" calls the constructor from the parent class (Employee)
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;