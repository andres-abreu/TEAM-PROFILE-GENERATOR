const inquirer = require('inquirer')
const Intern = require('./Intern')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const fs = require('fs')
const generateTemplate = require('../src/generate-template')

const members = []

const renderMenu = () => {
    return inquirer
    .prompt({
        type:'list',
        name:'menu',
        message:'What would you like to do',
        choices:['Add Engineer','Add Intern','Finish and Build the Page']
    }).then((choice) => {
        if(choice.menu === 'Add Engineer') {
            getEngineer()
        } else if(choice.menu === 'Add Intern'){
            getIntern()
        } else if (choice.menu === 'Finish and Build the Page'){
            let template = generateTemplate(members)
            fs.writeFile('./dist/index.html',template,err => {
                if (err) throw err
            })
        }
    })
}

const getIntern = () => {
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter the name of the intern?",
            validate: name => {
                if (name) {
                    return true
                } else console.log('Please enter a name'); return false 
            }
        },
        {
            type:'input',
            name:'id',
            message:"Enter the id of the intern",
            validate: id => {
                if (id) {
                    return true
                } else console.log(' Please enter an id');  
                return false
            }
        },
        {
            type:'input',
            name:'email',
            message:'Enter the email of the intern',
            validate: email => {
                if (email) {
                    return true
                } else console.log(' Please enter an email');  
                return false
            }
        },
        {
            type:'input',
            name:'school',
            message:'Enter the name of the school',
            validate: school => {
                if (school) {
                    return true
                } else console.log(' Please enter a school name');  
                return false
            }
        }
        ])
        .then((answers) => {
            const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
            members.push(intern)
            renderMenu()
        })
}

const getManager = () => {
    return inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:"Enter the name of the manager?",
            validate: name => {
                if (name) {
                    return true
                } else console.log('Please enter a name'); return false 
            }
        },
        {
            type:'input',
            name:'id',
            message:"Enter the id of the manager",
            validate: id => {
                if (id) {
                    return true
                } else console.log(' Please enter an id');  
                return false
            }
        },
        {
            type:'input',
            name:'email',
            message:'Enter the email of the manager',
            validate: email => {
                if (email) {
                    return true
                } else console.log(' Please enter an email');  
                return false
            }
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Enter the number of the manager office',
            validate: officeNumber => {
                if (officeNumber) {
                    return true
                } else console.log(' Please enter an office number');  
                return false
            }
        }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
            members.push(manager)
            renderMenu()
        })
}

const getEngineer = () => {
        return inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:"Enter the name of the engineer?",
                validate: name => {
                    if (name) {
                        return true
                    } else console.log('Please enter a name'); return false 
                }
            },
            {
                type:'input',
                name:'id',
                message:"Enter the id of the engineer",
                validate: id => {
                    if (id) {
                        return true
                    } else console.log(' Please enter an id');  
                    return false
                }
            },
            {
                type:'input',
                name:'email',
                message:'Enter the email of the engineer',
                validate: email => {
                    if (email) {
                        return true
                    } else console.log(' Please enter an email');  
                    return false
                }
            },
            {
                type:'input',
                name:'github',
                message:'Enter the github username of the engineer',
                validate: githubUserName => {
                    if (githubUserName) {
                        return true
                    } else console.log(' Please enter the engineer github username');  
                    return false
                }
            }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
                members.push(engineer)
                renderMenu()
            })
}

const app = () => getManager()


module.exports = app