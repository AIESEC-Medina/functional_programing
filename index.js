const eps = [
  { name: "chokri", age: "20", status: "applied", lc: "medina" },
  { name: "ayari", age: "24", status: "open", lc: "university" },
  { name: "hsan", age: "19", status: "applied", lc: "bardo" },
  { name: "mounir", age: "28", status: "finished", lc: "medina" },
  { name: "chawki", age: "24", status: "open", lc: "medina" },
];

const names = eps.map((ep) => ep.name);

const epFromMedina = eps.filter((ep) => ep.lc !== "medina");

const epStatusOpen = eps.find((ep) => ep.name === "chawki");

const totalAgesEps = eps.reduce((prev, curr) => {
  return prev + parseInt(curr.age);
}, 0);