// testing Employee.js

const Manager = require('../lib/manager.js');
const manager = new Manager('Meme', '565656', 'meme@meme.com', '0738');

//testing constructor values for manager object
test('getting the constructor values fr the employee object', () => {
    expect(manager.name).toBe('Meme');
    expect(manager.id).toBe('565656');
    expect(manager.email).toBe('meme@meme.com');
    expect(manager.officeNumber).toBe('0738');
})

//testing each method

test('getting name from getName()', () => {
    expect(manager.getName()).toBe('Meme');
})

test('getting id from getId()', () => {
    expect(manager.getId()).toBe('565656');
})

test('getting email from getEmail()', () => {
    expect(manager.getEmail()).toBe('meme@meme.com');
})

test('getting phone number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('0738');
})

test('getting Employee from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
})

