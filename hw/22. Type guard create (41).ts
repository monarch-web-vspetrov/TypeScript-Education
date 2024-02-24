type Animal = "cat" | "dog" | "bird";

enum Status {
  Available = "available",
  NotAvailable = "not available",
}

interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvalibleData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvalibleData {
  message: string;
  nextUpdateIn: Date;
}

// Response #1
const truedata = {
  status: "available",
  data: {
    animal: "cat",
    breed: "yes",
    sterilized: "yes",
    location: "Russia",
    age: 32,
  },
};

interface AnimalDataTrue {
  status: Status.Available;
  data: AnimalAvalibleData;
}

// Response #2
const falsedata = {
  status: "not available",
  data: {
    message: "no data available",
    nextUpdateIn: new Date(),
  },
};

interface AnimalDataFalse {
  status: Status.NotAvailable;
  data: AnimalNotAvalibleData;
}

function checkAnimalData(
  animal: AnimalDataTrue | AnimalDataFalse
): string | object {
  if (animal.status === Status.Available) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

const a = checkAnimalData(falsedata);
checkAnimalData(truedata);

console.log(a);

//  ________________________
// ! Правильное решение

// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}
// Не повторяем код, используем extends
interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

// Интерфейсы стоит разделить, так как оба ответа будут иметь поле data
// И только по статусу будет сложно определить данные

interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res: Res): res is AnimalAvailableResponse {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData1(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
