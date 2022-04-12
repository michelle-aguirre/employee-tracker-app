const Employee = require("../lib/Employee");

test("can initiate employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});


test("can set name via constructor arguments", () => {
const name="Michelle";
    const e = new Employee();
  expect(e.name).toBe(name);
});

test("can set id via constructor arguments", () => {
const valuetest= 4;
    const e = new Employee("Michelle", valuetest);
  expect(e.id).toBe(valuetest);
});

test("can set email via constructor arguments", () => {
const valuetest= test@test.com; 
    const e = new Employee("Michelle", 5, valuetest);
  expect(e.email).toBe(valuetest);
});
test("can get name via getName()", () => {
    const valuetest="Michelle";
        const e = new Employee(valuetest);
      expect(e.getName()).toBe(valuetest);
    });
    
    test("can get id via getId()", () => {
    const valuetest= 4;
        const e = new Employee("Michelle", valuetest);
      expect(e.getId()).toBe(valuetest);
    });
    
    test("can get email via getEmail()", () => {
    const valuetest= test@test.com; 
        const e = new Employee("Michelle", 5, valuetest);
      expect(e.getEmail()).toBe(valuetest);
    });

    test("can getRole return \"Employee\"", () => {
        const valuetest= "Employee"; 
            const e = new Employee("Michelle", 5, test@test.com);
          expect(e.getRole()).toBe(valuetest);
        });    
