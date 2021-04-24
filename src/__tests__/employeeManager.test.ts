import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
  it("can add another new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Mahsa Ghahri",
      phone: "6334565434",
      title: "Dietitian",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("Mahsa Ghahri");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Mahsa Ghahri");
    expect(employee.phone).toEqual("6334565434");
    expect(employee.title).toEqual("Dietitian");
  });
  it("can cancel an edit of an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "developer" });
    await em.cancelChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "CEO",
    });
  });
  it("editing and then navigating away from saving does not save changes", async () => {
    await em.selectEmployeeByName("Marnie Barnett");
    await em.editEmployee({ name: "Liana Yazdi" });
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Marnie Barnett");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 2,
      name: "Marnie Barnett",
      phone: "3094812387",
      title: "CTO",
    });
  });
});
