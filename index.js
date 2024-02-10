var _a;
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
var id = Symbol("id");
var dataS = (_a = {},
    _a[id] = 1,
    _a);
console.log(dataS[id]);
var num1 = 1n;
console.log(num1);
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
function startServer(protocol, port) {
    if (port === portHttp || port === portHttps) {
        console.log("".concat(protocol, "://").concat(port) + " Server Started");
        return "Server started";
    }
    else {
        console.error("Server not started, wrong port");
    }
    return "Server started";
}
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
