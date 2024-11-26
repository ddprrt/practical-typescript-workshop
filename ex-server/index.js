// create new Express server
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const tasks = new Map();
let id = 0;

app.get("/tasks", (req, res) => {
  res.send(JSON.stringify(Object.fromEntries(tasks)));
});

app.get("/tasks/:id", (req, res) => {
  console.log(JSON.stringify(tasks.get(+req.params.id)));
  res.send(JSON.stringify(tasks.get(+req.params.id)));
});

app.post("/tasks", (req, res) => {
  tasks.set(id++, req.body);
  res.send(`Stored task with id ${id - 1}`);
});

app.listen(3000);
