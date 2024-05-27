// Данная функция использует дженерики
function proccessingData<T, S>(data: T[], option: S): string {
  data.length; // по умолчание это будет недоступно, но есть лайфхак который может получить длину
  // * proccessingData<T, S>(data: T[], option: S)
  // Указав массив типов мы можем получить длину, но при этом дальше могут быть получены ошибки если где-то исопльзовался метод не применимый к массивам

  // В данном примере мы испоьзуем сужение типов в дженерике
  // Брагодаря тому что мы перебираем ожидаемые типы мы ограничиваем информацию которую ожидаем в поступлении
  // И таким образом отсеиваем все что недопустимо для функции - ТАЙП ГАРД
  switch (typeof data) {
    case "number":
      return "69";
      break;
    case "string":
      return "string";
      break;
    default:
      return "not valid type";
  }
}

let asq = proccessingData([1], "@");
const assw = proccessingData("string");
const ewxo = proccessingData<number, boolean>([23], true);
// Причем указав в типах number, но педелав туда массив это не будет некорректным, так как он ожидает получить массив чисел (из-за T[])

// ! _______-

interface DataSaver {
  //   processing: <T>(data: T) => T;
  processing: typeof processing; // Используем запрос типа чтобы использовать тип дженерика в интерфейсе
}

const saver: DataSaver = {
  //   processing(data) {
  //     console.log("some actions");
  //     return data;
  //   },

  //   Данный вариант предпочтительней в использовании
  processing(data) {
    return data;
  },
};

// !!! ___________

// Иногда дженерики используют в качестве аннотации

function processing<T>(data: T): T {
  return data;
}
// Теперь так как есть переиспользуемая функция, мы можем использовать ей в качестве шаблона для описания методов
const saver1: DataSaver = {
  processing: processing,
};

// Использование функции как аннотации к функции
let newFunc: <T>(data: T) => T = processing;

// !!! ___________
// Дженерики также можно использовать внутри интерфейсов , а дальше передавать эти интерфейсы по объектам
interface ProcessingFunc {
  <T>(data: T): T;
}

let newFunc2: ProcessingFunc = processing;

interface ProcessingFunc2 {
  processing: ProcessingFunc;
}
