const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// In-memory storage using an object instead of Map for better key-value handling
let tasks = new Map();

// Middleware to generate API response format
const wrapResponse = (data) => ({
  data,
  metadata: {
    timestamp: new Date().toISOString(),
    requestId: uuidv4(),
  },
});

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  const errorResponse = {
    error: {
      code: err.code || "INTERNAL_ERROR",
      message: err.message || "An unexpected error occurred",
      details: err.details,
    },
    metadata: {
      timestamp: new Date().toISOString(),
      requestId: uuidv4(),
    },
  };

  res.status(err.statusCode || 500).json(errorResponse);
};

// Routes
app.get("/tasks", (req, res) => {
  const { status, priority, search } = req.query;
  let filteredTasks = [...tasks.values()];

  if (status) {
    filteredTasks = filteredTasks.filter((task) => task.status === status);
  }
  if (priority) {
    filteredTasks = filteredTasks.filter((task) => task.priority === priority);
  }
  if (search) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  res.json(wrapResponse(filteredTasks));
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) {
    return res.status(404).json(
      wrapResponse({
        code: "TASK_NOT_FOUND",
        message: "Task not found",
      }),
    );
  }
  res.json(wrapResponse(task));
});

app.post("/tasks", (req, res) => {
  const taskId = uuidv4();
  const task = {
    ...req.body,
    id: taskId,
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: 1,
      lastModifiedBy: "system",
      revisionHistory: [],
      tags: [],
      complexity: 1,
      impact: 1,
    },
  };

  tasks.set(taskId, task);
  res.status(201).json(wrapResponse(task));
});

app.patch("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const task = tasks.get(taskId);

  if (!task) {
    return res.status(404).json(
      wrapResponse({
        code: "TASK_NOT_FOUND",
        message: "Task not found",
      }),
    );
  }

  const metadata = {
    updatedAt: new Date().toISOString(),
    version: (task.metadata.version || 0) + 1,
    revisionHistory: [
      ...task.revisionHistory,
      {
        id: uuidv4(),
        timestamp: new Date().toISOString(),
        userId: "system",
        changes: {
          fieldName: Object.keys(req.body)[0],
          oldValue: task[Object.keys(req.body)[0]],
          newValue: req.body[Object.keys(req.body)[0]],
        },
      },
    ],
  };

  const updatedTask = {
    ...task,
    ...req.body,
    ...metadata,
  };

  tasks.set(taskId, updatedTask);
  res.json(wrapResponse(updatedTask));
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  console.log(taskId);
  console.log([...tasks.keys()]);
  if (!tasks.has(taskId)) {
    return res.status(404).json(
      wrapResponse({
        code: "TASK_NOT_FOUND",
        message: "Task not found",
      }),
    );
  }

  tasks.delete(taskId);
  res.status(204).send();
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
