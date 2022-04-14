const Employee = require('../lib/Employee')


test('creates a new employee', ()=> {
    const employee = new Employee('Will','1','blblb')

    expect(employee.name).toBe('Will')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('blblb')
})

test("get name of employee",()=>{
    const employee = new Employee('Will','1','blblb')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
})

test("get id of employee",()=>{
    const employee = new Employee('Will','1','blblb')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
})

test("get email of employee", ()=>{
    const employee = new Employee('Will','1','blblb')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})