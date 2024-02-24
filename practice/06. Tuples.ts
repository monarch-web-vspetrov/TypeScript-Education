// * Tuples - кортеж

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  40,
  "Jhon",
  "Jhon",
  "Jhon",
  "Jhon",
];

const [isMan, age, ...userNameP] = userDataTuple;
console.log(userNameP);

// ______________________________
// Union types

const newMessage: string | number = "hello";
const massages: string[] | number[] = [3213, 3232];
const massages2: string[] | number[] = ["21wqe", "211"];
// Если хочется кашу - используй кортежи

// function printMsg(msg: string | number): void {
//   console.log(msg);
// }
