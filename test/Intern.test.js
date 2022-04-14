const Intern = require('../lib/Intern')

test('Create a new Intern', ()=>{
    const intern = new Intern('Will','1','sad','UM')

    expect(intern.name).toBe('Will')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('sad')
    expect(intern.school).toBe('UM')
})

test('get intern role',()=>{
    const intern = new Intern('Will','1','sad',"525")

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})