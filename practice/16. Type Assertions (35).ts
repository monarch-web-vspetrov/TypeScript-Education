// Утверждение типов type assertion

const fetchDataNew = (url: string, method: "GET" | "POST"): void => {
  console.log("fetched");
};

const requestOption = {
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
} as const; // данный позволяет установить значения в объекте как константы

fetchDataNew(requestOption.url, requestOption.method);
fetchDataNew(requestOption.url, requestOption.method as "GET");

// Альтернативный синтакцис
// fetchDataNew(requestOption.url, <"GET">requestOption.method); // * наименее популярный

const box = document.querySelector(".box") as HTMLElement;
const input = document.querySelector("input") as HTMLInputElement;

const someInfo: string = input.value;
console.log(someInfo);

// примеры установки литерального типа
let someA = "value" as const;
let someB = 121 as const;
let someArr = [someA, someB] as const;
let someObj = { user: 212, age: "21" } as const;

let summaryA = Math.round(Math.random() * 10) + 1 ? "yes" : "no";
