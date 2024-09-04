const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Express specific stuff
app.use("/static", express.static("static")); // For service static files
app.use(express.urlencoded());

// PUG specific stuff
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const con = "";
  const params = { title: "BSDK Uth Jaa", content: con };
  res.status(200).render("index.pug", params);
});
app
  .post("/", (req, res) => {
    // console.log(req.body)
    name = req.body.name;
    gender = req.body.gender;
    age = req.body.age;
    address = req.body.address;
    more = req.body.more;

    let outputToWrite = `Client ${name}, ${age} years old ${gender}, is residing at ${address}. More about what he/she says "${more}". `;
    fs.writeFileSync("output.txt", outputToWrite);
    const params = { message: "Your form has been submitted successfully" };
    res.status(200).render("index.pug", params);
  })
  // Start the server
  .listen(port, () => {
    console.log(`listening ${port}`);
  });
app;
