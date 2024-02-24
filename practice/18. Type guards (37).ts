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
  engine: string;
  wheels: number;
}

interface Ship {
  engine: string;
  sail: string;
}

function repaireVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    vehicle.wheels = 4;
  } else {
    vehicle.sail = "yes";
  }
}

function isCar(car: Car | Ship): car is Car {
  return "wheels" in car;
}

function isShip(ship: Car | Ship): ship is Ship {
  return "sail" in ship;
}
