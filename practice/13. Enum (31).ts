// Enum позволяется задать контснты через перечисление.

const TOP = "Top";
const RIGHT = "Right";

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease-in",
  LINEAR = "linear",
}

// Используя const мы очистим все перечисления переменных в итоговом коде
// ЛУчше не использовать const, так как они могут быть изменены в процессе работы
// const enum TimingFuncN {
//   EASE = 23,
//   EASE_IN = 12,
//   LINEAR = `${EASE} ${EASE_IN}`,
// }

function frame(elem: string, dir: Directions, tFunc: TimingFunc.EASE): void {
  if (dir === Directions.RIGHT) {
    console.log(tFunc);
  }
}

frame("id", Directions.RIGHT, TimingFunc.EASE);
