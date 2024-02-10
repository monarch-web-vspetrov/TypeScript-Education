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

// ________________________________
// * NEVER

const logSome = (isBirthday: boolean, name: string, age: number): string => {
  if (isBirthday === true) {
    return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
  } else if (isBirthday === false) {
    return "wrong";
  }
  return createError1("eroor");
};

// function createError(msg: string) {
//     throw new Error(msg);
// }

const createError1 = (msg: string) => {
  throw new Error(msg);
};

// _______________________________
// * Null and Undefined
const test: null = null;
const test5: undefined = undefined;
const test6: any = undefined;

// ______________________________
// Symbol and BigInt

let id: symbol = Symbol("id");
const dataS = {
  [id]: 1,
};

console.log(dataS[id]);

const num1: bigint = 1n;
console.log(num1);

// _______________________________
// Objects

const userData = {
  isBirthdayData: true,
  ageData: 33,
  userNameData: "Ivan",
  lol: {
    lol: "kek",
    id: 1,
  },
};

const logSome1 = ({
  isBirthdayData,
  ageData,
  userNameData,
  lol,
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  lol: {
    lol: string;
    id: number;
  };
}): string => {
  if (isBirthdayData) {
    console.log(lol.lol);
    return `Congraz ${userNameData.toUpperCase()}! Your age is ${ageData + 1}`;
  } else {
    return createError2("eroor");
  }
};

console.log(logSome1(userData));

// function createError(msg: string) {
//     throw new Error(msg);
// }

const createError2 = (msg: string) => {
  throw new Error(msg);
};

// ______________________________
// Arrays

const departaments: string[] = ["dev", "123", "marketing"];

const departament = departaments[1];

departaments.push("qwe");

const reports = departaments
  .filter((d) => d !== "dev")
  .map((d) => `${d} - done`);

const departamentNumber: number[][] = [[123], [123]];

const [first] = reports;

console.log(first);

// _____________________________
// * Practice

const electricityUserData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0];

function calculatePayments(
  elData: {
    readings: number;
    units: string;
    mode: string;
  },
  wData: {
    readings: number;
    units: string;
  },
  elRate: number,
  wRate: number
): void {
  if (elData.mode === "double" && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7;
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
}

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

function sendInvoice(
  monthPayments: number[],
  electricityUserData: {
    readings: number;
    units: string;
  },
  waterUserData: {
    readings: number;
    units: string;
  }
): string {
  const text = `
        Hello!
        this month you used ${electricityUserData.readings} ${electricityUserData.units} of electicity
        it will const: ${monthPayments[0]}$

        ok ? ${waterUserData.readings} ${waterUserData.units} of water
    `;

  return text;
}

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

// ______________________________
// * Tuples

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

// ______________________________
// Сужение типов

function printMsg(msg: string | number): void {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toExponential(3));
  }
}

printMsg("qweqw");
printMsg(12);

// ______________________________
// * Примитивные литеральные типы
const portHttp: number = 3000;
const portHttps: number = 3001;
let newItem: "Hello" = "Hello";
// Теперь тут не может быть другого значения.

// Мы можем это использовтаь в целях получения обязательных данных в строгом формате
const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  if (port === portHttp || port === portHttps) {
    console.log(`${protocol}://${port}` + " Server Started");
    return "Server started";
  } else {
    console.error("Server not started, wrong port");
  }

  return "Server started";
};

startServer("https", 3000);

function createAnimation(
  id: AnimationId,
  animationName: string,
  // ! Этот прием используется для того чтобы ограничить то, что может проставлять в данный аргумент функции. Те если мы используем аргумент для отображения инфы о плавности, то
  // ! То указываем лишь те значения которые допустимы для того или иного браузера или стандарта.
  timingFunc: AnimationTimingFunc = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;
  console.log(`#${id} ${animationName} ${timingFunc} ${duration} ${iterCount}`);
  // if (elem) {
  // elem.style.animation = `${animationName} ${duration}s ${timingFunc} ${iterCount}`;
  // }
}

// Работать без разметки не будет
createAnimation(123213, "animationName", "ease", 123, 233);

// ______________________________
// Псевдонимы типов Type Aliases

type AnimationTimingFunc = "ease" | "ease-in" | "ease-out";
type AnimationId = string | number;

// ____________________________

const serverConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  test: "no",
};

startServer(serverConfig.protocol, serverConfig.port);

// ______________________________
// types  additionals

type Config = {
  protocol: "http" | "https";
  port: 3000 | 3001;
};

// ____________________________
// Перенесение типов

// type Role = {
//   role: string;
// };

// type ConfigWithRole = Config & Role;

const typeMerge: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  test: "no",
};

// Аналогично и для функций

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

// ____________________________
// Interface

type InterfaceConfig = {
  protocol: "http" | "https";
  port: 3000 | 3001;
};

interface ConfigInterface {
  protocol: "http" | "https";
  port: 3000 | 3001;
}

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {
  test: string;
}

const interfaceServerConfig: InterfaceConfig = {
  protocol: "http",
  port: 3000,
};

// ______________________________

interface ConfigNew {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface RoleNew {
  role: string;
}

interface ConfWithRole extends ConfigNew, RoleNew {
  test: string;
}

const newServConfig: ConfWithRole = {
  protocol: "http",
  port: 3000,
  test: "test",
  role: "admin",
  log: (msg: string): void => {
    console.log("qeqwe");
  },
};

// type newStartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;

function newStartServer(
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" {
  console.log(`${protocol}://${port} server started`);
  return "Server started";
}

newStartServer(newServConfig.protocol, newServConfig.port, newServConfig.log);
// Индексные свойства
// ТАкой подход полезен когда ты не знаешь сколько ключей будет в том или ином объекте, но знаешь точно какими они будут типами.
interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "10px",
  bottom: "10px",
};
