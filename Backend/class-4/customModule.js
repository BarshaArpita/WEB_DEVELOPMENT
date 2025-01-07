const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

//CRUD

//Read
const readFile = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

//Write
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

//Creat
const createStudent = (student) => {
  const data = fs.readFile();
  data.students.push(student);
  writeFile(data);
  return student;
};

//Update by ID
const updateStudent = (id, updateData) => {
  const data = readFile();
  const studentIndex = data.students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    data.students[studentIndex] = {
      ...data.student[studentIndex],
      ...updateData,
    };
    writeFile(data);
    return data.students[studentIndex];
  } else {
    return null;
  }
};

//Delete by ID
const deleteStudent = () => {
  const data = readFile();
  const filterStudents = data.students.filter((student) => student.id !== 1);
  if (filterStudents.length.length !== data.students.length) {
    writeFile({ students: filterStudents });
    return true;
  } else {
    false;
  }
};

module.exports = {
  readFile,
  writeFile,
  createStudent,
  updateStudent,
  deleteStudent,
};
