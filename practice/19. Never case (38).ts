// Type guards

function printSome(msg: string[] | number | boolean) {
  if (isArray(msg)) {
    msg.forEach((m) => {
      console.log(m);
    });
  } else if (isNumber(msg)) {
    console.log(msg.toExponential(2));
  } else {
    console.log(msg);
  }
}

printSome(23);

function isNumber(n: unknown): n is number {
  return typeof n === "number";
}

function isArray(arr: unknown): arr is string[] {
  return Array.isArray(arr);
}

// * Для случаев, если функция не знает какой объект она будет чинить можно использовать следующий пример
interface Car {
  name: "car";
  engine: string;
  wheels: number;
}

interface Ship {
  name: "ship";
  engine: string;
  sail: string;
}

interface Airplane {
  name: "airplane";
  engine: string;
  wings: string;
}

interface SuperAirplane {
  name: "smth";
  engine: string;
  wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

// * Еще один вариант применения Never в работе
// Благодаря never мы можем перестарховывать себя в случае, если, например, в типыв добавляем новые варианты типов.
// Таким образом, во время проверки на типы, если возвращаемое значение не будет равно ни одному из вариантов, то выполнение кода прекратится и мы поймем что где-то что-то упустили. В нашем случае, мы не добавили новый тип SuperAirplane.
function repaireVehicle(vehicle: Vehicle) {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log("ooopps nothing to repair");
  }
}

function isCar(car: Vehicle): car is Car {
  return "wheels" in car;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}
