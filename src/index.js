import "./styles.css";

const source = [
  {
    name: "Paul",
    age: 24
  },
  {
    name: "Mary",
    age: 32
  },
  {
    name: "Peter",
    age: 24
  },
  {
    name: "John",
    age: 31
  }
];

let output = {};

source.map((item, index, array) => {
  output[item.age] = (output[item.age] || 0) + 1;
  console.log(output);
});

Object.keys(output).forEach((key) => {
  let a = output[key] > 1 ? "s" : "";
  console.log(`User${a} have age ${key}`);
});
