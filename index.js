const people = [
  { name: "chokri", age: "20", country: "tunisia" },
  { name: "ivan", age: "24", country: "france" },
  { name: "jhon", age: "19", country: "usa" },
  { name: "aya", age: "28", country: "tunisia" },
  { name: "chawki", age: "24", country: "tunisia" },
];

//clback funtion brings map through the elements of the array
const names = people.map((person) => person.name);

//clback funtion brings all objects with the filtering condtion
const peopleFromTunisia = people.filter(
  (person) => person.country === "tunisia"
);
const peopleFromOtherLcs = people.filter(
  (person) => person.country !== "tunisia"
);

//clback funtion brings the object once the condition is true
const personStatusOpen = people.find((person) => person.status === "open");

//clback funtion that takes the previous and the next element of the array and combine them
const totalAges = people.reduce((prev, curr) => {
  return prev + parseInt(curr.age);
}, 0);
