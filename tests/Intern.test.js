const Intern = require ('../lib/Intern');

const employee = new Intern("Sophie", 6, "sophie@gmail.com", "yale");

describe("Intern", () => {
    
    describe("getName", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Sophie");
    
        });
    });

    describe("getId", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(6);
        });
    });
    
    describe("getEmail", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("sophie@gmail.com");
        });
    });

    describe("getSchool", () => {
        it("returns the github of the employee", () => {
            expect(employee.getSchool()).toBe("Yale");
        });
    });

    describe("getRole", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("intern");
        });
    });
});
    