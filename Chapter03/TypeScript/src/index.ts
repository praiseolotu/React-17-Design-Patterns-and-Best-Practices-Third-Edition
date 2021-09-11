// creating a type in typescript

type User = {
    username: string
    email: string
    name: string
    age?: number 
    // this ensure that age is optional field
    website: string
    active: boolean
}
    
const user: User = {
    username: 'x86olioxx',
    email: 'abc@xyz.com',
    name: 'Olotu Praise',
    age: 19,
    website: 'http://www.js.education',
    active: true
}
    
    // Let's suppose you will insert this data using Sequelize...
    // models.User.create({ ...user }}


    // An interface can be extended, merged and implemented
    // Extending an interface
interface IWork {
    company: string
    position: string
}
    
interface IPerson extends IWork {
    name: string
    age: number
}


// A class can implement an interface

// Implementing an interface
interface IWork {
    company: string,
    position: string
}
    
const User: IWork = {
    company: "FlutterWave",
    position: "Developer"
}

// An interface can be merged a type cant be merged 

interface IUser {
    username: string
    email: string
    name: string
    age?: number
    website: string
    active: boolean
}
    
interface IUser {
    country: string
}
    
const user1: IUser = {
    username: 'x86olioxx',
    email: 'abc@xyz.com',
    name: 'Olotu Praise',
    country: 'Nigeria',
    age: 19,
    website: 'http://www.js.education',
    active: true
}

// Generics

function App<T>(items: T[]):T[] {
    return new Array().concat(items)
}

let numArray = App<number>([1,2,3,4])
let strArray = App<string>(['I', 'love', 'coding'])

console.log(numArray)
