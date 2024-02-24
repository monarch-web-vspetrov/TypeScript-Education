// 32 Unkown

// Допустим мы получаем от сервера какие-то данные.
// * let something: any;
// * something = "qeq";
// Далее, мы эти данные кладем в массив
// * let data: string[] = something;
// И хотим по массиву отработать методом find
// * data.find((e) => e);
// И в результате мы получим ошибку в рантайм так как будем применять метод массива к строке

let smth: unknown;

smth = "qwe";
// let data: string[] = smth;
// data.find((e) => e);

const someValue: unknown = 10;
// someValue.method(); // error так как any позволяет вызвать все.

function fetchData(arg: unknown): void {
  if (typeof arg === "string") {
    console.log(arg.toUpperCase());
  } else if (typeof arg === "number") {
    console.log(arg.toExponential(3));
  } else {
    // console.log(arg.toLocaleUpperCase()); // error
  }
}

const jsonObj = '{"name": "John", "age": 30}';

function saveParse(s: string): unknown {
  return JSON.parse(s);
}

const jsonData = saveParse(jsonObj);

// jsonData.someMethod(); //error так как unknown не имеет методов

function transferData(arg: unknown): void {
  if (typeof arg === "string") {
    console.log(arg.toUpperCase());
  } else if (typeof arg === "number") {
    console.log(arg.toExponential(3));
  } else {
    // console.log(arg.toLocaleUpperCase()); // error
  }
}

transferData(jsonObj);

// Unkown перекрывает все типи в юнионах, кроме any
type T0 = any | unknown;
type T1 = number | unknown;
// Но если Unkown встает вместе с интерсекшеном
type T2 = number & unknown;
