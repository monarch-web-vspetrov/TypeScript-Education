// Создаем дефолтный класс но передаем ему дженерики которые в последствии будем использвоать
class User22<T, S> {
  login: T;
  age: S;

  // создаем конструктор
  constructor(login: T, age: S) {
    this.login = login;
    this.age = age;
  }
  // дженериками можно пользоваться также в методах класса
  sayMyName<T>(surname: T): string {
    // ? важно отметить что текущий дженерик Т отличен от того что был описан выше
    if (typeof surname === "string") {
      return `My name is ${this.login} ${surname}`;
    } else {
      return `Bad data`;
    }
  }
}

class AdminUser<T, S> extends User22<string, number> {
  // тут нельзя передать дженерики так как коду требуется точное обознанение типов. Мы лищаемся универсальности, но зато оставляем типизацию
  constructor(login: string, age: number) {
    super(login, age);
  }
}

// два варианта использования, с явным типом или без
const ivan = new User22<string, number>("Ivan", 22); // этот вариант как и в функциаях обычно используется когда данные принимаются откуда-то извне
const ivan1 = new User22("Ivan", 22);
console.log(ivan);
console.log(ivan1);
console.log(ivan.sayMyName("Allah"));
