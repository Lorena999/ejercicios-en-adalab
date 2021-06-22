const fs = require("fs");

const myObject = {
  user: "Mari Carment",
  email: "mari@gmail.com",
  age: 28,
};
console.log(myObject);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(myObject);
  }
};

fs.writeFile("./output.txt", JSON.stringify(myObject), handleWriteFile);
