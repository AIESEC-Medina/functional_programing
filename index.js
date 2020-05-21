const eps = [
  { name: "chokri", age: "20", status: "applied", lc: "medina" },
  { name: "ayari", age: "24", status: "open", lc: "university" },
  { name: "hsan", age: "19", status: "applied", lc: "bardo" },
  { name: "mounir", age: "28", status: "finished", lc: "medina" },
  { name: "chawki", age: "24", status: "open", lc: "medina" },
];

//clback funtion brings map through the elements of the array
const names = eps.map((ep) => ep.name);

//clback funtion brings all objects with the filtering condtion
const epFromMedina = eps.filter((ep) => ep.lc == "medina");
const epFromOtherLcs = eps.filter((ep) => ep.lc !== "medina");

//clback funtion brings the object once the condition is true
const epStatusOpen = eps.find((ep) => ep.status === "open");

//clback funtion that takes the previous and the next element of the array and combine them
const totalAgesEps = eps.reduce((prev, curr) => {
  return prev + parseInt(curr.age);
}, 0);