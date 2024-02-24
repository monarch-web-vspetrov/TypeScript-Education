let userName: string = "Ivan";

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
  isBirthday: boolean;
  name: string;
  age: number;
} = JSON.parse(userJson);

const logBthday = (isBirthday: boolean, name: string, age: number): string => {
  if (isBirthday) {
    return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
  }
  return "";
};

let message: string = logBthday(isBirthdayData, userName, ageData);
console.log(message);

// ! Type ANY - avoid any type

// Practice

const currRate: string = "1.05";

const fetchCurr = (response: string) => {
  const data: number = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  avalilable: boolean,
  amount: number,
  comimission: number
): void | string {
  if (avalilable) {
    let res: number = fetchCurr(currRate) * amount * comimission;
    console.log(res);
  }
}

transferEurToUsd(true, 500, 1.05);
