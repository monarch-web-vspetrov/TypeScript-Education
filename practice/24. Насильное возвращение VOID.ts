// Данный механизм необходим для предотвращения возвращения значений в колбек функциях
// Но обязательно нужно создавать отдельный тайп который будет отвечать за установку типа возвращаемого значения

// ! так работать не будет
// function fakeVoid(): void {
//     return true;
// }

type voidFunc = () => void;

const s: voidFunc = () => {
  return "hello";
};

const n: voidFunc = () => {
  return 1;
};

const d = s();
const b = n();
console.log(d);
console.log(b);

const names = ["qwe", "asd"];
const newArr = names.slice();

names.forEach((n, index, arr) => {
  arr.push("qwe2222");
});
