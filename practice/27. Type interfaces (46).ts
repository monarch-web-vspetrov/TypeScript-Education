type Snth<T> = T;

const someVar: Snth<number> = 5; // смысла в этом мало, поэтому

interface User<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

// таким образом, мы создаем дженерик типа и говорим, что тип ключаlogin будет определяться в момент создания объекта, а age заранее определено

const user: User<{ mother: string; father: string }> = {
  login: "admin",
  age: 33,
  parents: {
    mother: "Kate",
    father: "Alex",
  },
};
// Generic ограничения, которые позволяют создать правила минимальных даннных для плучения и  дополнить еще чем-то.
interface ParentsOfUser {
  // если испоььзовать простой формат интерфеся то мы лишаемся гибкости в нашем коде. Мы строго говорим что можно принять только даныне поля с определенными типами данных
  //* Дженерики решают эту проблему
  mother: string;
  father: string;
}

// Чтобы это решить:
const user3: User<{
  mother: string;
  father: string;
  married: boolean; // явный пример того как мы обязательно ожидаем 2 значения, но добавляем дополнительные
  someInfo: string;
}> = {
  login: "admin",
  age: 33,
  parents: {
    // mother: "Kate",
    father: "Alex",
    married: true,
    someInfo: "someInfo",
    mother: "",
  },
};

// ! _____
// Generic helper types

type OrNull<Type> = Type | null; // простой варивант проверки
type OneOrMany<Type> = Type | Type[]; // удобный вариант проверки который позволяет получать либо 1 значение, либо массив указанных значений

// const data: OneOrMany<number> = [3, 3, 3, 3];
const data2: OneOrMany<string> = ["3,3,3,3", "wqw"];
const data3: OneOrMany<boolean> = [true, false];

// ! _____
// Аналогичные ограничения можно использовать и с примитивами
function someFw(amount: number | string): number | string {
  // и чтобы сказать, что тип получваемых данных может быть число или строка  (сужение типов) мы пишем extends (но можно это делать и без использования дженериков)
  console.log(`Your cash is ${amount}`);
  return amount;
}

someFw(1212);
someFw("212121");
// someF(true) //! ошибка
