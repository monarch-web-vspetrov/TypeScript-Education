// Данная функция использует дженерики
function proccessingData<T>(data: T): T {
  // Мы говорим, что T может быть любым типом, затем помещаем T в data и дата становится типом получаемым в функцию
  // А потом мы говорим, что возвращаем T, те тип который получили в функцию
  //  ...

  return data;
}

let as = proccessingData(1);
const ass = proccessingData("string");
console.log(as);
console.log(ass);

// * Второй вариант
// Используется в случаях когда данные приходят извне в неизвестном заранее типа

const num = 12;

const res = proccessingData<number>(num); // в скобочках указываем тип который хотим получить

// * Третий вариант - описание интерфейса только в момент его использования (более унивесральный вариант)

interface printUK {
  design: number;
}

interface printES {
  design: string;
}

// Теперь когда мы использует интерфейс с универсальным типом, то можно указать тип в скобочках и явно сказать что будет исопльзоваться
// А структуру указать базовую ниже
interface Print<T> {
  design: T;
}

const somePrint: Print<number> = {
  design: 1,
};

const somePrint2: Print<string> = {
  design: "string",
};

// * Обобщение можно создавать для типов, интерфейсов, методов, классов и функций
