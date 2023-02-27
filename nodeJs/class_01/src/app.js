const colors = require("colors");

let users = [
  { role: "admin", fullname: "john doe", username: "qwerty", pass: "123qwe" },
  { role: "user", fullname: "bob bobski", username: "aaabbb", pass: "232323" },
];

logIn = (username, pass) => {
    for (let user of users) {
      if (user.username === username && user.pass === pass) {
        console.log("User is logged in".green);
        return;
      }
    }
    console.log("User not found".red.bgYellow);
  }
logIn('qwerty', '123qwe')  


