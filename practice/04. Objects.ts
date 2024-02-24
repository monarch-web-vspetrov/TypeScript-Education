// Objects

const userData = {
  isBirthdayData: true,
  ageData: 33,
  userNameData: "Ivan",
  lol: {
    lol: "kek",
    id: 1,
  },
};

const logSome1 = ({
  isBirthdayData,
  ageData,
  userNameData,
  lol,
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  lol: {
    lol: string;
    id: number;
  };
}): string => {
  if (isBirthdayData) {
    console.log(lol.lol);
    return `Congraz ${userNameData.toUpperCase()}! Your age is ${ageData + 1}`;
  } else {
    return createError2("eroor");
  }
};

console.log(logSome1(userData));

// function createError(msg: string) {
//     throw new Error(msg);
// }

const createError2 = (msg: string) => {
  throw new Error(msg);
};
