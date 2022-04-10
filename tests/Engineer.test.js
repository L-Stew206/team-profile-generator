const Engineer = require ('../lib/Engineer');

const employee = new Engineer("Sarah", 3, "sarah@live.com", "sarah006");

describe("Engineer", () => {
    
    describe("getName", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Sarah");
    
        });
    });

    describe("getId", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(3);
        });
    });
    
    describe("getEmail", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("sarah@live.com");
        });
    });

    describe("getGithub", () => {
        it("returns the github of the employee", () => {
            expect(employee.getEmail()).toBe("sarah006");
        });
    });

    describe("getRole", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("engineer");
        });
    });
});
    