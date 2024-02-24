// * NEVER

const logSome = (isBirthday: boolean, name: string, age: number): string => {
  if (isBirthday === true) {
    return `Congraz ${name.toUpperCase()}! Your age is ${age + 1}`;
  } else if (isBirthday === false) {
    return "wrong";
  }
  return createError1("eroor");
};

// function createError(msg: string) {
//     throw new Error(msg);
// }

//   Вообще никакого значения не вернет, но возвращает ошибку
const createError1 = (msg: string) => {
  throw new Error(msg);
};
