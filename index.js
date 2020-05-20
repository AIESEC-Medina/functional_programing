const eps = [
  { name: "chokri", age: "20", status: "applied", lc: "medina" },
  { name: "ayari", age: "24", status: "open", lc: "university" },
  { name: "hsan", age: "19", status: "applied", lc: "bardo" },
  { name: "mounir", age: "28", status: "finished", lc: "medina" },
  { name: "chawki", age: "24", status: "open", lc: "medina" },
];

const names = eps.map((ep) => ep.name);

//   const names = []
//   for (let i = 0; i < eps.length; i++) {
//       names.push(eps[i].name)
//   }

const epFromMedina = eps.filter((ep) => ep.lc !== "medina");

// const epFromMedina = []
// for (let i = 0; i < eps.length; i++) {
//     if (eps[i].lc === 'medina') {
//         epFromMedina.push(eps[i])
//     }
// }

const epStatusOpen = eps.find((ep) => ep.name === "chawki");

// const epStatusOpen = []
// for (let i = 0; i < eps.length; i++) {
//     if(eps[i].status == 'applied'){
//         epStatusOpen.push(eps[i])
//     }
// }

const totalAgesEps = eps.reduce((prev, curr) => {
  return prev + parseInt(curr.age);
}, 0);

// let totalAgesEps = 0
// for (let i = 0; i < eps.length; i++) {
//     totalAgesEps = totalAgesEps + parseInt(eps[i].age)
// }

console.log(totalAgesEps);
