interface Person {
  name: string;
  age: number;
  position: string;
}

interface Center {
  name: string;
  peopleAmount: number;
  persons: Person[];
}

const CGT: Center = {
  name: "CGT",
  peopleAmount: 20,
  persons: [
    {
      name: "Vitaly",
      age: 22,
      position: "manager",
    },
    {
      name: "Alex",
      age: 22,
      position: "manager",
    },
    {
      name: "Dima",
      age: 22,
      position: "manager",
    },
  ],
};

interface CenterForBuh {
  name: string;
  peopleAmount: number;
  persons: Person[];
  cetnerBudjet: number;
}

function centerTransform(center: Center, budjet: number): CenterForBuh {
  return {
    name: center.name,
    peopleAmount: center.peopleAmount,
    persons: center.persons,
    cetnerBudjet: budjet,
  };
}

console.log(centerTransform(CGT, 1000));
