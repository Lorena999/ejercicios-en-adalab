const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3500;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get("/response-a-json", (req, res) => {
  res.json({ result: "Ok" });
});

app.get("/response-b-html", (req, res) => {
  const date = new Date();
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
      </head>
      <body class="page">
        <header>
          <h1>Express: Esta es una página de prueba</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get("/response-c-redirect-to-youtube", (req, res) => {
  let number = Math.ceil(Math.random() * 10);
  if (number % 2 === 0) {
    res.redirect("https://youtube.com");
  } else {
    res.redirect("https://instagram.com");
  }
});

app.get("/response-d-with-404-status-error", (req, res) => {
  // more info about http status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
  res.status(404).json({
    errorCode: "data-not-found",
    errorMessage: "Data not found",
  });
  // another way to do it is:
  // res.status(404);
  // res.json({
  //   errorCode: 'data-not-found',
  //   errorMessage: 'Data not found'
  // });
});
