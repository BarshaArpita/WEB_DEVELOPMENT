//import modules
const express = require("express");
const { readFile, writeFile } = require("./customModule");
const app = express();

//middle ware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send({ msg: "it is working" });
});

// get all students
app.get("/students", (req, res) => {
  const data = readFile();
  res.status(200).send({ msg: "Students fetch successfully", data });
});

//create a student
app.post("/create-student", (req, res) => {
  const data = readFile();
  const { name, age } = req.body;
  const id = data.students.length + 1;
  const student = { id, name, age };
  data.students.push(student);
  writeFile(data);
  res.status(201).send({ msg: "student created sucessfully ", student });
});

//server listen

const port = 4040;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
