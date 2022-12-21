const Employee = require("../lib/Employee");

describe("Employee", () => {
  
  it("should create an empty object using constructor", () => {
      const result = new Employee()
      expect(typeof (result)).toBe("object");
  });
  
  //test for name
  it("should accept a name argument", () => {
      let exampleName = "John"
      const result = new Employee(exampleName)
      expect(result.name).toEqual(exampleName);
  });

  it("should accept an ID argument", () => {
      let exampleID = "123"
      const result = new Employee("John", exampleID)
      expect(result.ID).toEqual(exampleID);
  });

  //test for email 
  it("should accept an email argument", () => {
      let exampleEmail = "john@fakemail.com"
      const result = new Employee("John", "123", exampleEmail)
      expect(result.email).toEqual(exampleEmail);
  });

  //test for getName() method, then getID(), then getEmail()
  it("getName() should return name", () => {
      exampleName = "John"
      const result = new Employee(exampleName)
      expect(result.getName()).toEqual(exampleName);
  });

  it("getID() should return ID", () => {
      exampleID = "123"
      const result = new Employee("John", exampleID)
      expect(result.getID()).toEqual(exampleID);
  });
  
  it("getEmail() should return email", () => {
  exampleEmail = "john@fakemail.com"
  const result = new Employee("John", "123", exampleEmail)
  expect(result.getEmail()).toEqual(exampleEmail);
});
});


