// 27 отображение типов

let simeSalary: number;

salary = 333;

interface UserData {
  bith: boolean;
  name: string;
  age: number;
}

const someUserData = '{"bith": true, "name": "Ivan", "age": 22}';
const someUserObj: UserData = JSON.parse(someUserData);

console.log(someUserObj.bith);

let isOk = true;
let movement: boolean | string = false;

if (isOk) {
  movement = "moving";
}

const arr: [string[]] | number[] = [["ewqewqeqwe"]];
