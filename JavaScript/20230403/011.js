// json generator
// https://json-generator.com/
//json
let 회원정보 = [
  {
    _id: "642a623de347699d6d60fad3",
    index: 0,
    age: 36,
    eyeColor: "green",
    name: "Monroe Gould",
    gender: "male",
    company: "NSPIRE",
  },
  {
    _id: "642a623d3a11b1ac89ccfd9b",
    index: 1,
    age: 38,
    eyeColor: "green",
    name: "Camacho Blair",
    gender: "male",
    company: "MULTRON",
  },
  {
    _id: "642a623db9d9f8fc406eb15a",
    index: 2,
    age: 23,
    eyeColor: "green",
    name: "Mercado Elliott",
    gender: "male",
    company: "EBIDCO",
  },
  {
    _id: "642a623d76d575540511f336",
    index: 3,
    age: 40,
    eyeColor: "blue",
    name: "Valeria Casey",
    gender: "female",
    company: "SQUISH",
  },
  {
    _id: "642a623de2cccd081c0c81c9",
    index: 4,
    age: 24,
    eyeColor: "blue",
    name: "Martinez Becker",
    gender: "male",
    company: "EARGO",
  },
];

회원정보[0];
회원정보[0]["name"];
회원정보[1]["company"];

let 나이평균 =
  (회원정보[0]["age"] +
    회원정보[1]["age"] +
    회원정보[2]["age"] +
    회원정보[3]["age"] +
    회원정보[4]["age"] +
    회원정보[5]["age"]) /
  6;
console.log(나이평균);
