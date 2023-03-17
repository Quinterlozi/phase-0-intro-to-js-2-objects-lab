// Write your solution in this file!
const employee = {
    name: "Joan",
    streetAddress: "10 Whitesand"
  };
  function updateEmployeeWithKeyAndValue(employee, key,value){
  const name = "Sam"
  const streetAddress = "11 Broadway"
  return Object.assign({}, employee, {[key]: value});
  }
 function destructivelyUpdateEmployeeWithKeyAndValue(emploee, key, value) {
    const name = "Sam"
    const streetAddress = "11 Broadway"
    employee[key] = value;
     return employee; 
 }
 function deleteFromEmployeeByKey (employee, key) {
    let newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 }
