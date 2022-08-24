// testing Engineer.js

const Engineer = require('../lib/engineer.js');
const engineer = new Engineer('Meme', '565656', 'meme@meme.com', 'meriem0319');

//testing constructor values for engineer object
test('getting the constructor values fr the engineer object', () => {
    expect(engineer.name).toBe('Meme');
    expect(engineer.id).toBe('565656');
    expect(engineer.email).toBe('meme@meme.com');
    expect(engineer.gitHub).toBe('meriem0319');
})

//testing each method

test('getting name from getName()', () => {
    expect(engineer.getName()).toBe('Meme');
})

test('getting id from getId()', () => {
    expect(engineer.getId()).toBe('565656');
})

test('getting email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('meme@meme.com');
})

test('getting github Username from getGitHub()', () => {
    expect(engineer.getGithub()).toBe('meriem0319');
})

test('getting Employee from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
})

