//importing package to read the file
const fs = require("fs");

//transform the file content from <Buffer></Buffer> to normal text
const output = fs.readFileSync("./eps.txt", "utf-8");

//removing spaces using trim(), spliting lines with split()
const objects = output
  .trim()
  .split("\n")
  .map((line) => line.split("\t"));

//taking the first element as a header of the arrays and push desired objects within 
//you can find {name, selected_programme, age}
//this is function that takes array as an argument
const transformArray = ((array) => {
    return objects.reduce((prev, curr) => {
        prev[curr[0]] = prev[curr[0]] || [];
        prev[curr[0]].push({
          name: curr[1],
          selected_programme: curr[2],
          age: curr[3],
        });
        return prev;
      }, {})
})

//getting ep_details from the array
const ep_details = transformArray(objects).ep_details

//getting ep_info from the array
const ep_info = transformArray(objects).ep_info