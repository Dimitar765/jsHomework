// console.log("test");
const fs = require("fs");
const path = require("path");

fs.writeFile("homework.txt", "", function (error) {
  if (error) throw error;
  //   console.log("write succesfull");
});

let pathToFile = path.join(__dirname, "homework.txt");
// console.log(pathToFile);

fs.writeFileSync(pathToFile, "Homework 02 in Basic Node");

fs.appendFileSync(pathToFile, "\nFINISHED");

let content = fs.readFileSync(pathToFile, { encoding: "utf-8" });
console.log(content);
