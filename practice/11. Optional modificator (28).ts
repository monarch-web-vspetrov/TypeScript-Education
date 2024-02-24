// 28 Модификатор Optional

interface Facer {
  readonly login: string;
  pass: string;
  age: number | undefined;
  address: string;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const face: Facer = {
  login: "Mista",
  pass: "qweqwe",
  address: "qweqwe",
  age: undefined,
  parents: {
    mother: "alla",
  },
};

const dbName = "qweqw";

function sendUserData(obj: Facer, db?: string): void {
  console.log(
    obj.parents?.mother?.toLocaleUpperCase(),
    db?.toLocaleUpperCase()
  );
}

sendUserData(face, "dbname");
