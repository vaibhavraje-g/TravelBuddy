const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const fs = require("fs");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger documentation
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Create log directory if it doesn't exist
const logDirectory = path.join(__dirname, "../logs");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Create a write stream for request logs
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

// Create a write stream for error logs
const errorLogStream = fs.createWriteStream(
  path.join(logDirectory, "error.log"),
  { flags: "a" }
);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

// Routes
const routing = require("./routes/routing");
app.use("/api", routing);

// Error Handling Middleware
app.use((req, res, next) => {
  const error = createError(404, "Resource not found");
  errorLogStream.write(`404 Error: ${req.method} ${req.url} - ${error.message}\n`);
  next(error);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  errorLogStream.write(`Error ${status}: ${message}\n`);
  res.status(status).json({
    error: {
      status,
      message,
    },
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
