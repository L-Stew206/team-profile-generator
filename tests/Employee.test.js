const Employee = require ('../lib/Employee');

const employee = new Employee("Chris", 7, "chris@gmail.com", "employee");

describe("Employee", () => {
    
    describe("getName", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Chris");
    
        });
    });

    describe("getId", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(7);
        });
    });
    
    describe("getEmail", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("chris@gmail.com");
        });
    });

    describe("getRole", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("employee");
        });
    });
});
    