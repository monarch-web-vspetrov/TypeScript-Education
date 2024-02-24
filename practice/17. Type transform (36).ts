//  * Пример в котором мы рассматриваем преобразование объектов
// Мы создали 2 интерфейса которые описываются 2 разных объекта. Задача в том, чтобы сделать третий объект, который будет включать в себя часть первого объекта и часть второго.
interface Departament {
  name: string;
  budget: number;
}

const departament1: Departament = {
  name: "Web dev",
  budget: 40000,
};

interface Project {
  name: string;
  projectBudget: number;
}

// Для реализации этой задачи можно воспользоваться функцией трансформатором, которая принимает в себя объект типа Departament (часть которого нам нужно оставить) и возвращает объект типа Project (часть которого нам нужно добавить).
function transformDepartment(
  departament: Departament,
  amount: number
): Project {
  return {
    name: departament.name,
    projectBudget: amount,
  };
}

const mainProject: Project = transformDepartment(departament1, 50000);
