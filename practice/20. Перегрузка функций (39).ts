interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

// Перегрузка функций.
// Данный подход позволяет писать "инструкцию" по использованию функции. Укзав до функции ее перегрузки можно устанавливать правила по ее вызову. Например, если функция функция приняла 1 аргумент, то ее вызов будет основываться на интерфейсе Square. Если функция приняла 2 аргумента, то ее вызов будет основываться на интерфейсе Rect. От этого будет меняется подсказка и требования к заполению во время вызова функции.

// ! Записывается всегда до начала функции
// * Можно менять название аргументов
// * Все перегрузки должны быть совместимы с главной функцией (нельзя менять типы и вызывать конфликты)
// Запись не являет на работу функций. Это лишь документация для дальнейшей работы с функцией
function calculateArea(side: number): Square;
function calculateArea(a: number, b: number): Rect;

function calculateArea(a: number, b?: number): Square | Rect {
  if (b) {
    const rectangle: Rect = {
      a,
      b,
      area: a * b,
    };

    return rectangle;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

calculateArea(5);
calculateArea(5, 21);
