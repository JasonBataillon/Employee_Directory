const express = require('express');
const app = express();
const PORT = 3000;
const employees = require('./employees');

app.listen(PORT, () => {
  console.log(`This port is listening: ${PORT}.`);
});
app.get('/employees', (req, res) => {
  res.json(employees);
});
app.get('/', (req, res) => {
  res.send('Hello employees!');
});
app.get('/employees/random', (req, res) => {
  const randomEmployee = Math.floor(Math.random() * employees.length);
  res.json(employees[randomEmployee]);
});
app.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send('This employee does not exist.');
  } else {
    res.json(employees[id]);
  }
});
