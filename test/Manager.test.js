const Manager = require('../lib/Manager')


test('creates a new Manager', ()=> {
    const manager = new Manager('Will','1','blblb',"525")

    expect(manager.name).toBe('Will')
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('blblb')
    expect(manager.officeNumber).toBe('525')
})


test('get manager role',()=>{
    const manager = new Manager('Will','1','blblb',"525")

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})