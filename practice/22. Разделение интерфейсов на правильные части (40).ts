// Type guards

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

// ! В данном уроке рассказывается о том, что лучше не использовать комплексные интерфейсы объединяющие несколько разных объектов в один так как в будущем это будет вызывать ошибки при проверке типов или их отсутсвие.

interface ComplexVehicle {
  name: "car" | "ship" | "airplane";
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

// type Vehicle = Car | Ship | Airplane;

const car: ComplexVehicle = {
  name: "car",
  engine: "V9",
};

// * Еще один вариант применения Never в работе
// Благодаря never мы можем перестарховывать себя в случае, если, например, в типыв добавляем новые варианты типов.
// Таким образом, во время проверки на типы, если возвращаемое значение не будет равно ни одному из вариантов, то выполнение кода прекратится и мы поймем что где-то что-то упустили. В нашем случае, мы не добавили новый тип SuperAirplane.
function repaireVehicle(vehicle: ComplexVehicle) {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels! * 2); // ! лучше не использовать это так как потом будет тяжело дебажить и определять в чем была ошибка.
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    default:
      //   const smth: never = vehicle; // ошибка
      console.log("ooopps nothing to repair");
  }
}

repaireVehicle(car);
