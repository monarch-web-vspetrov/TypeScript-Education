// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface HoursFullINfo {
  total: number;
  inMenu: number;
}

interface Num2<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

interface PlayerData<hoursInfo extends HoursFullINfo | number | string> {
  game: string | number;
  hours: hoursInfo;
  server: string;
}

const player1: Num2<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: Num2<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: Num2<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
    play: 433,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

// #1 создал интерфейс для объекта который я ожидаю
interface Figure {
  name: string;
  data?: object; // ? так как данных может не быть
}

// # Указываю тип объектов в получаемом аргументе, а не просто обычный массив объектов
function calculateAmountOfFigures(figure: Figure[]): AmountOfFigures {
  let result: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  if (!Array.isArray(figure)) {
    // проверка на наличие обязательного поля
    console.log("Is not Array!");
  } else {
    figure.forEach((item: Figure): void => {
      // подсчитываю данные
      if (item.hasOwnProperty("name")) {
        switch (item["name"]) {
          case "rect":
            result["squares"] += 1;
            break;
          case "circle":
            result["circles"] += 1;
            break;
          case "triangle":
            result["triangles"] += 1;
            break;
          default:
            result["others"] += 1;
            break;
        }
      }
    });
    return result;
  }
  return result;
}

const data = [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];

console.log(calculateAmountOfFigures(data));
