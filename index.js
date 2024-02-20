var userName = "Ivan";
// '', "", `` - string
// 10, 0, 0.2, -40, 3e10 - number
// true, false - boolean
var number = 10;
var isBirthdayData = true;
var ageData = 123;
// function logBthday (isBirthday: boolean, name: string, age: number): string {
//     if (isBirthday) {
//         return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
//     }
//     return 'undefined'
// }
var salary;
salary = 5550;
var userJson = "{\"isBirthday\": true, \"name\": \"Ivan\", \"age\": 22}";
var userObj = JSON.parse(userJson);
var logBthday = function (isBirthday, name, age) {
    if (isBirthday) {
        return "Congraz ".concat(name.toUpperCase(), "! Your age is ").concat(age + 1);
    }
    return "";
};
var message = logBthday(isBirthdayData, userName, ageData);
console.log(message);
// ! Type ANY - avoid any type
// Practice
var currRate = "1.05";
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(avalilable, amount, comimission) {
    if (avalilable) {
        var res = fetchCurr(currRate) * amount * comimission;
        console.log(res);
    }
}
transferEurToUsd(true, 500, 1.05);
// ________________________________
// * NEVER
var logSome = function (isBirthday, name, age) {
    if (isBirthday === true) {
        return "Congraz ".concat(name.toUpperCase(), "! Your age is ").concat(age + 1);
    }
    else if (isBirthday === false) {
        return "wrong";
    }
    return createError1("eroor");
};
// function createError(msg: string) {
//     throw new Error(msg);
// }
var createError1 = function (msg) {
    throw new Error(msg);
};
// _______________________________
// * Null and Undefined
var test = null;
var test5 = undefined;
var test6 = undefined;
// ______________________________
// Symbol and BigInt
// let id: symbol = Symbol("id");
// const dataS = {
//   [id]: 1,
// };
// console.log(dataS[id]);
// const num1: bigint = 1n;
// console.log(num1);
// _______________________________
// Objects
var userData = {
    isBirthdayData: true,
    ageData: 33,
    userNameData: "Ivan",
    lol: {
        lol: "kek",
        id: 1,
    },
};
var logSome1 = function (_a) {
    var isBirthdayData = _a.isBirthdayData, ageData = _a.ageData, userNameData = _a.userNameData, lol = _a.lol;
    if (isBirthdayData) {
        console.log(lol.lol);
        return "Congraz ".concat(userNameData.toUpperCase(), "! Your age is ").concat(ageData + 1);
    }
    else {
        return createError2("eroor");
    }
};
console.log(logSome1(userData));
// function createError(msg: string) {
//     throw new Error(msg);
// }
var createError2 = function (msg) {
    throw new Error(msg);
};
// ______________________________
// Arrays
var departaments = ["dev", "123", "marketing"];
var departament = departaments[1];
departaments.push("qwe");
var reports = departaments
    .filter(function (d) { return d !== "dev"; })
    .map(function (d) { return "".concat(d, " - done"); });
var departamentNumber = [[123], [123]];
var first = reports[0];
console.log(first);
// _____________________________
// * Practice
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0];
function calculatePayments(elData, wData, elRate, wRate) {
    if (elData.mode === "double" && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
}
calculatePayments(electricityUserData, waterUserData, elRate, wRate);
function sendInvoice(monthPayments, electricityUserData, waterUserData) {
    var text = "\n        Hello!\n        this month you used ".concat(electricityUserData.readings, " ").concat(electricityUserData.units, " of electicity\n        it will const: ").concat(monthPayments[0], "$\n\n        ok ? ").concat(waterUserData.readings, " ").concat(waterUserData.units, " of water\n    ");
    return text;
}
console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
// ______________________________
// * Tuples
var userDataTuple = [
    true,
    40,
    "Jhon",
    "Jhon",
    "Jhon",
    "Jhon",
];
var isMan = userDataTuple[0], age = userDataTuple[1], userNameP = userDataTuple.slice(2);
console.log(userNameP);
// ______________________________
// Union types
var newMessage = "hello";
var massages = [3213, 3232];
var massages2 = ["21wqe", "211"];
// Если хочется кашу - используй кортежи
// function printMsg(msg: string | number): void {
//   console.log(msg);
// }
// ______________________________
// Сужение типов
function printMsg(msg) {
    if (typeof msg === "string") {
        console.log(msg.toUpperCase());
    }
    else {
        console.log(msg.toExponential(3));
    }
}
printMsg("qweqw");
printMsg(12);
// ______________________________
// * Примитивные литеральные типы
var portHttp = 3000;
var portHttps = 3001;
var newItem = "Hello";
// Теперь тут не может быть другого значения.
// Мы можем это использовтаь в целях получения обязательных данных в строгом формате
var startServer = function (protocol, port) {
    if (port === portHttp || port === portHttps) {
        console.log("".concat(protocol, "://").concat(port) + " Server Started");
        return "Server started";
    }
    else {
        console.error("Server not started, wrong port");
    }
    return "Server started";
};
startServer("https", 3000);
function createAnimation(id, animationName, 
// ! Этот прием используется для того чтобы ограничить то, что может проставлять в данный аргумент функции. Те если мы используем аргумент для отображения инфы о плавности, то
// ! То указываем лишь те значения которые допустимы для того или иного браузера или стандарта.
timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = "ease"; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    console.log("#".concat(id, " ").concat(animationName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    // if (elem) {
    // elem.style.animation = `${animationName} ${duration}s ${timingFunc} ${iterCount}`;
    // }
}
// Работать без разметки не будет
createAnimation(123213, "animationName", "ease", 123, 233);
// ____________________________
var serverConfig = {
    protocol: "http",
    port: 3000,
    role: "admin",
    test: "no",
};
startServer(serverConfig.protocol, serverConfig.port);
// ____________________________
// Перенесение типов
// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role;
var typeMerge = {
    protocol: "http",
    port: 3000,
    role: "admin",
    test: "no",
};
var interfaceServerConfig = {
    protocol: "http",
    port: 3000,
};
var newServConfig = {
    protocol: "http",
    port: 3000,
    test: "test",
    role: "admin",
    log: function (msg) {
        console.log("qeqwe");
    },
};
// type newStartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;
function newStartServer(protocol, port, log) {
    console.log("".concat(protocol, "://").concat(port, " server started"));
    return "Server started";
}
newStartServer(newServConfig.protocol, newServConfig.port, newServConfig.log);
var styles = {
    position: "absolute",
    top: "10px",
    bottom: "10px",
};
// ____________________________
// 27 отображение типов
var simeSalary;
salary = 333;
var someUserData = '{"bith": true, "name": "Ivan", "age": 22}';
var someUserObj = JSON.parse(someUserData);
console.log(someUserObj.bith);
var isOk = true;
var movement = false;
if (isOk) {
    movement = "moving";
}
var arr = [["ewqewqeqwe"]];
var face = {
    login: "Mista",
    pass: "qweqwe",
    address: "qweqwe",
    age: undefined,
    parents: {
        mother: "alla",
    },
};
var dbName = "qweqw";
function sendUserData(obj, db) {
    var _a, _b;
    console.log((_b = (_a = obj.parents) === null || _a === void 0 ? void 0 : _a.mother) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase(), db === null || db === void 0 ? void 0 : db.toLocaleUpperCase());
}
sendUserData(face, "dbname");
var newUser = {
    login: " asda",
    pass: "qweqwe",
    age: 323,
    address: "qweqwe",
    parents: {
        mother: "alla",
        father: "qwe",
    },
};
// newUser.login = "FAQ"; // error потому readonly
var basicPorts = [3000, 2000, 80];
// basicPorts[0] = 4000; // error потому readonly, помимо этого строгость работает и на добавление, и на удаление, а также и на кортежи
// basicPorts.push(4000); // error потому readonly
var someArray = [1, 2, 3];
// someArray.push(4); // error потому readonly
var userFreeze = {
    login: " asda",
    pass: "qweqwe",
    age: 323,
    address: "qweqwe",
};
// userFreeze.pass = "wqeqwe"; // error потому readonly для всех свойств объектов. Это дженейрик.
// _____________________________
// Enum позволяется задать контснты через перечисление.
var TOP = "Top";
var RIGHT = "Right";
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
// Используя const мы очистим все перечисления переменных в итоговом коде
// ЛУчше не использовать const, так как они могут быть изменены в процессе работы
// const enum TimingFuncN {
//   EASE = 23,
//   EASE_IN = 12,
//   LINEAR = `${EASE} ${EASE_IN}`,
// }
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame("id", Directions.RIGHT, TimingFunc.EASE);
// _____________________________
// 32 Unkown
// Допустим мы получаем от сервера какие-то данные.
// * let something: any;
// * something = "qeq";
// Далее, мы эти данные кладем в массив
// * let data: string[] = something;
// И хотим по массиву отработать методом find
// * data.find((e) => e);
// И в результате мы получим ошибку в рантайм так как будем применять метод массива к строке
var smth;
smth = "qwe";
// let data: string[] = smth;
// data.find((e) => e);
var someValue = 10;
// someValue.method(); // error так как any позволяет вызвать все.
function fetchData(arg) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase());
    }
    else if (typeof arg === "number") {
        console.log(arg.toExponential(3));
    }
    else {
        // console.log(arg.toLocaleUpperCase()); // error
    }
}
var jsonObj = '{"name": "John", "age": 30}';
function saveParse(s) {
    return JSON.parse(s);
}
var jsonData = saveParse(jsonObj);
// jsonData.someMethod(); //error так как unknown не имеет методов
function transferData(arg) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase());
    }
    else if (typeof arg === "number") {
        console.log(arg.toExponential(3));
    }
    else {
        // console.log(arg.toLocaleUpperCase()); // error
    }
}
transferData(jsonObj);
// _____________________________
// Запросы типов
// interface DataFromUser {
//   water: number;
//   el: number;
// }
var dataFromControl = {
    water: 200,
    el: 350,
};
function checkReadings(data) {
    var dataFromUser = {
        water: 200,
        el: 350,
    };
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    }
    else {
        return false;
    }
}
var PI = 3.14;
var PIClone;
// _____________________________
// Утверждение типов type assertion
var fetchDataNew = function (url, method) {
    console.log("fetched");
};
var requestOption = {
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
}; // данный позволяет установить значения в объекте как константы
fetchDataNew(requestOption.url, requestOption.method);
fetchDataNew(requestOption.url, requestOption.method);
// Альтернативный синтакцис
// fetchDataNew(requestOption.url, <"GET">requestOption.method); // * наименее популярный
var box = document.querySelector(".box");
var input = document.querySelector("input");
var someInfo = input.value;
console.log(someInfo);
