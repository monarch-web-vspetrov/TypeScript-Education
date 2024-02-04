let userName:string = "Ivan";

// '', "", `` - string
// 10, 0, 0.2, -40, 3e10 - number
// true, false - boolean

let number: number = 10;
let isBirthdayData: boolean = true;
const ageData: number = 123;

// function logBthday (isBirthday: boolean, name: string, age: number): string {
//     if (isBirthday) {
//         return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
//     }
//     return 'undefined'
// }

let salary: number;
salary = 5550;

const userJson = `{"isBirthday": true, "name": "Ivan", "age": 22}`;

const userObj: {
    isBirthday: boolean,
    name: string,
    age: number
} = JSON.parse(userJson);


const logBthday = (isBirthday: boolean, name: string, age: number): string  => {
    if (isBirthday) {
        return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
    }
    return 'undefined'
}

let message: string = logBthday(isBirthdayData, userName, 22);
console.log(message);