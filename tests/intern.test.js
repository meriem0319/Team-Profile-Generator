// testing Inter.js

const Intern = require('../lib/intern.js');
const intern = new Intern('Meme', '565656', 'meme@meme.com', 'Temple');

//testing constructor values for intern object
test('getting the constructor values fr the employee object', () => {
    expect(intern.name).toBe('Meme');
    expect(intern.id).toBe('565656');
    expect(intern.email).toBe('meme@meme.com');
    expect(intern.school).toBe('Temple');
})

//testing each method

test('getting name from getName()', () => {
    expect(intern.getName()).toBe('Meme');
})

test('getting id from getId()', () => {
    expect(intern.getId()).toBe('565656');
})

test('getting email from getEmail()', () => {
    expect(intern.getEmail()).toBe('meme@meme.com');
})

test('getting email from geSchool()', () => {
    expect(intern.getSchool()).toBe('Temple');
})

test('getting Employee from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
})

