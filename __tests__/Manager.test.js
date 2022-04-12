const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("can set officeNumber via constructor arguments", () => {
    const valuetest = 100;
    const e = new Manager("Michelle", 5, "test@test.com", valuetest);
    expect(e.officeNumber).toBe(valuetest);
});

test("can get officeNumber via getOfficeNumber()", () => {
    const valuetest = 200;
    const e = new Manager("Michelle", 5, "test@test.com", valuetest);
    expect(e.getOfficeNumber()).toBe(valuetest);
});
test("can getRole return \"Manager\"", () => {
    const valuetest = "Manager";
    const e = new Manager("Michelle", 5, "test@test.com", 200);
expect(e.getRole()).toBe(valuetest);
});      