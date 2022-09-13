const Employee = require("./Employee")

class Intern extends Employee {
    constructor(id, name, email, school) {
        // Call parent constructor using "super"
        super(name, id, email);

        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;