const fs = require("fs");

const handleRead = (err, fileContents) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Contenido del fichero en formato texto:", fileContents);
    const jsonData = JSON.parse(fileContents);
    console.log("Contenido del fichero en formato objeto:", jsonData);
    console.log(`Usuario: ${jsonData.user}`);
    console.log(`Email: ${jsonData.email}`);
  }
};

fs.writeFile("./input-file.txt", "utf8", handleRead);
