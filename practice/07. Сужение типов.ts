// Сужение типов

function printMsg(msg: string | number): void {
  if (typeof msg === "string") {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toExponential(3));
  }
}

printMsg("qweqw");
printMsg(12);

// ______________________________
// * Примитивные литеральные типы
const portHttp: number = 3000;
const portHttps: number = 3001;
let newItem: "Hello" = "Hello";
// Теперь тут не может быть другого значения.

// Мы можем это использовтаь в целях получения обязательных данных в строгом формате
const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  if (port === portHttp || port === portHttps) {
    console.log(`${protocol}://${port}` + " Server Started");
    return "Server started";
  } else {
    console.error("Server not started, wrong port");
  }

  return "Server started";
};

startServer("https", 3000);

function createAnimation(
  id: AnimationId,
  animationName: string,
  // ! Этот прием используется для того чтобы ограничить то, что может проставлять в данный аргумент функции. Те если мы используем аргумент для отображения инфы о плавности, то
  // ! То указываем лишь те значения которые допустимы для того или иного браузера или стандарта.
  timingFunc: AnimationTimingFunc = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;
  console.log(`#${id} ${animationName} ${timingFunc} ${duration} ${iterCount}`);
  // if (elem) {
  // elem.style.animation = `${animationName} ${duration}s ${timingFunc} ${iterCount}`;
  // }
}

// Работать без разметки не будет
createAnimation(123213, "animationName", "ease", 123, 233);
