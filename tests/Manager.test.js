const Manager = require ('../lib/Manager');

const employee = new Manager("Evan", 4, "evan@hotmail.com", 100);

describe("Manager", () => {
    
    describe("getName", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Evan");
    
        });
    });

    describe("getId", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(4);
        });
    });
    
    describe("getEmail", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("evan@hotmail.com");
        });
    });

    describe("getOffice", () => {
        it("returns the office number of the manager", () => {
            expect(employee.getEmail()).toBe("100");
        });
    });

    describe("getRole", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("manager");
        });
    });
});
    