
   
const Engineer = require('../lib/Engineer')

test('Create a new Engineer', ()=>{
    const engineer = new Engineer('Will','1','sad','WillCuba')

    expect(engineer.name).toBe('Will')
    expect(engineer.id).toBe('1')
    expect(engineer.email).toBe('sad')
    expect(engineer.github).toBe('WillCuba')
})

test('get engineer role',()=>{
    const engineer = new Engineer('Will','1','sad',"525")

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
})