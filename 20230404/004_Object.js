const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
  0: "01050442903",
};

console.log(human.name);
console.log(human.age);
console.log(human["name"]);
console.log(human["age"]);
// human.0 error // 그래서 arr.1 안되는 것입니다.
human["0"];
// '01050442903'
human[0];
// '01050442903'

// 유사배열객체는 실무에서도 사용하지 않기 때문에 잊으셔도 됩니다.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

arr[0];
// 10
arr[1];
// 20
arr[2];
// 30
arr.length;
// 3

// 배열이 아닙니다. 유사배열객체라고 합니다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다.

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
  0: "01050442903",
};

human.name = "jun";
