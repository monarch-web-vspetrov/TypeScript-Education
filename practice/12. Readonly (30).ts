// 30 Readonly

interface UserInfo {
  readonly login: string;
  pass: string;
  age: number | undefined;
  address: string;
  parents?: {
    mother?: string;
    father?: string;
  };
}

let newUser: UserInfo = {
  login: " asda",
  pass: "qweqwe",
  age: 323,
  address: "qweqwe",
  parents: {
    mother: "alla",
    father: "qwe",
  },
};

// newUser.login = "FAQ"; // error потому readonly

const basicPorts: readonly number[] = [3000, 2000, 80];

// basicPorts[0] = 4000; // error потому readonly, помимо этого строгость работает и на добавление, и на удаление, а также и на кортежи

// basicPorts.push(4000); // error потому readonly

const someArray: ReadonlyArray<number> = [1, 2, 3];

// someArray.push(4); // error потому readonly

const userFreeze: Readonly<UserInfo> = {
  login: " asda",
  pass: "qweqwe",
  age: 323,
  address: "qweqwe",
};

// userFreeze.pass = "wqeqwe"; // error потому readonly для всех свойств объектов. Это дженейрик.
