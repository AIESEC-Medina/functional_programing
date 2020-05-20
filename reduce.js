const fs = require("fs");

const output = fs.readFileSync("./eps.txt", "utf-8");

const objects = output
  .trim()
  .split("\n")
  .map((line) => line.split("\t"));

const ep_details = ((objects, selected_programme) => {
    return objects.reduce((prev, curr) => {
        prev[curr[0]] = prev[curr[0]] || [];
        prev[curr[0]].push({
          name: curr[1],
          selected_programme: curr[2],
          age: curr[3],
        });
        return prev;
      }, {})
      .ep_info.filter((ep) => ep.selected_programme === selected_programme)
      .map((ep) => ep);
})
