import { EventEmitter } from "events";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const pathToLog = ".//db/greeting_log.txt";
const pathToJson = ".//db/students.json";

function CreateStudent(id, fullName, email, password) {
  this.id = uuidv4();
  this.name = fullName;
  this.email = email;
  this.password = password;
}

const newStudent = new CreateStudent(
  "id",
  "Petar Pejkovski",
  "petar@pejkovski.com",
  "qwerty"
);
// const anotherStudent = new CreateStudent(
//   "id",
//   "Jovan Jovanov",
//   "jovan@jovanov.com",
//   "qwerty"
// );

// console.log(newStudent);
// console.log(anotherStudent);

const emitter = new EventEmitter();
emitter.on("greet", () => {
  console.log(`Welcome ${newStudent.name}`);
  fs.appendFileSync(pathToLog, `\n${newStudent.name}`);
  fs.appendFileSync(pathToJson, JSON.stringify(newStudent));
});

emitter.emit("greet");
