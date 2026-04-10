// ! Arrow Function: It is also known as a syntactic sugar

// let demo = () => console.log("I am a demo function");
// demo();

// let demo1 = ($) => console.log("I am a demo1 function");
// demo1();

// let displayName = (userName) => console.log(userName);
// displayName("Ram");

// ! Implicit Return

// let demo2 = () => {
//   return "I am a demo 2 Function.";
// };
// console.log(demo2());

// ! Array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let squareArray = arr.map((value, index) => value * index);
// console.log(squareArray);

// let filterData = squareArray.filter((value) => value % 2 !== 0);
// console.log(filterData);

// let findSingleValue = squareArray.find((value) => value % 2 === 0);
// console.log(findSingleValue);

// ! Object: It is the real time entity. we are storing the values in kay and value format

// let personDetails = {
//   name: "RK",
//   contact: 1234567890,
//   address: "HYD",
// };
// console.log(personDetails);
// console.log(personDetails.name);
// console.log(personDetails["address"]);

// let details = [
//   {
//     name: "Rk",
//   },
//   {
//     name: "Ravi",
//   },
//   {
//     name: "Rk",
//   },
//   {
//     name: "Ravi",
//   },
//   {
//     name: "Rk",
//   },
//   {
//     name: "Ravi",
//   },
//   {
//     name: "Rk",
//   },
//   {
//     name: "Ravi",
//   },
// ];

// details.map((value) => console.log(value.name));

// let persons = [
//   {
//     name: "Rk",
//     age: 15,
//   },
//   {
//     name: "ravi",
//     age: 5,
//   },
//   {
//     name: "ramya",
//     age: 65,
//   },
//   {
//     name: "Kumari",
//     age: 48,
//   },
// ];
// let persons1 = [
//   {
//     name: "Raghu",
//     age: 15,
//   },
//   {
//     name: "siri",
//     age: 5,
//   },
//   {
//     name: "vivak",
//     age: 65,
//   },
//   {
//     name: "ram",
//     age: 48,
//   },
// ];

// let filteredDetails = persons.filter((value) => value.age > 18);
// console.log(filteredDetails);

// let filterThePersons = (data) => {
//   let filterData = data.filter((value) => value.age > 18);
//   console.log(filterData);
// };

// filterThePersons(persons)
// filterThePersons(persons1)

// ! Promises

// ! Syntax of promise :- new Promise(func)

// ! Stages of the promise :1. Pending
// !        2. Fulfilled
// !        3. Rejected

// console.log("Start");
// let myPromise = new Promise((res, rej) => {
//   let hunger = true;
//   if (hunger) {
//     res("Resolve");
//   } else {
//     rej("Not Satisfied");
//   }
// });
// console.log(myPromise);

// // ! To handle the promise we need to use the .then(function) and .catch(function) method

// myPromise.then((value) => console.log(value));
// myPromise.catch((value) => console.log(value));
// console.log("end");

// let handlingPromise = async () => {
//   try {
//     let response = await myPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
// handlingPromise();

// ! API Handling

// let data = () => {
//   let messages = fetch("https://jsonplaceholder.typicode.com/todos");
//   return messages;
// };
// data()
//   .then((value) => value.json())
//   .then((value) =>
//     value.map((data) => {
//       let p = document.createElement("p");
//       p.innerHTML = data.title;
//       document.body.append(p);
//     }),
//   );
// data().catch(() => {
//   //   console.log("Data Not Found");
//   let h = document.createElement("h1");
//   h.innerHTML = "DATA NOT FOUND";
//   document.body.append(h);
// });

// let messages = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let responseData = await response.json();
//     console.log(responseData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// messages();

// ! Destructuring

// ! Array Destructuring And Object Destructuring

let mall = [
  "clothes",
  ["US POLO", "ALLEN SOLLY", "JACK&JONES", "RARE RABBIT"],
  "food",
  ["PIZZA", "BIRYANI", "BURGER", "MANDI"],
  "books",
  "toys",
  "footware",
];

// books

// console.log(arr.at(2));
// console.log(arr.at(4));

// let [a, b, c, d, e] = mall;
// console.log(c);
// console.log(e);
// console.log(mall[1][3])

// let [, [, , a], , [, b]] = mall;
// console.log(a);
// console.log(b);

let details = {
  name: "Aravind",
  age: 16,
  address: {
    place: "KPHB",
  },
};
console.log(details.age);
console.log(details.address.place);

let {
  name,
  age,
  address: { place },
} = details;
console.log(age);
console.log(place);

let details1 = {
  name: "ravi",
  age: 25,
  place: {
    area: "nehru place",
    location: "Delhi",
  },
  hobbies: ["Playing", "Traveling"],
  places: {
    place1: "Jammu",
    place2: "Jaipur",
  },
};
let {
  hobbies: [, a],
  places: { place2 },
} = details1;
console.log(a);
console.log(place2);

// @ Spread and rest operator(...)

// @ If (...) are in lhs then we will call it as a rest operator
// @ If (...) are in rhs then we will call it as a spread operator

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 4, 7, 8, 9];
// [1,2,3,4,5,6,4,7,8,9]

// let arr3 = [...arr, ...arr1];
// console.log(arr3);

// let [c,b,...rest] = arr3

// ! Ternary Operator: condition ? true block: false block

let number = 26;

number % 2 === 0 ? console.log("EVEN") : console.log("ODD");

// ! Short Circuit Method

number % 2 === 0 && console.log("Even");
