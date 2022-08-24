// testing Employee.js

const Employee = require('../lib/employee.js');
const employee = new Employee('Meme', '565656', 'meme@meme.com');

//testing constructor values for employee object
test('getting the constructor values fr the employee object', () => {
    expect(employee.name).toBe('Meme');
    expect(employee.id).toBe('565656');
    expect(employee.email).toBe('meme@meme.com');
})

//testing each method

test('getting name from getName()', () => {
    expect(employee.getName()).toBe('Meme');
})

test('getting id from getId()', () => {
    expect(employee.getId()).toBe('565656');
})

test('getting email from getEmail()', () => {
    expect(employee.getEmail()).toBe('meme@meme.com');
})

test('getting Employee from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
})

