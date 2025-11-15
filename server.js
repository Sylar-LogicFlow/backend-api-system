// * server.js
// TODO: starting the project whole api building api \\
const express = require("express");
const app = express();

// Handle any unhandled Promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.error("Unhandled Rejection at:", promise);
  console.error("Error:", error);
  // Give the server a chance to finish current requests before shutting down
  server.close(() => {
    console.error("Server closed. Process will exit...");
    process.exit(1);
  });
});

const RoutersApp = require("./routers/AppRouters");

const helmet = require("helmet"); 
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(morgan("dev"));

// * best practice to handle errors
const MiddleErrorCatch = (err, req, res, next) => {
  // Log the error for debugging
  console.error("Error:", err);

  // Set default status code
  const statusCode = err.statusCode || 500;

  // Create error response
  const errorResponse = {
    success: false,
    error: {
      message: err.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  };

  // Send error response
  res.status(statusCode).json(errorResponse);
};
// * best practice to handle errors * \\

app.use("/Users", RoutersApp);

app.use((req, res) =>
  res.status(404).json({ Message: "Failed", result: "Not Found Page" })
);

app.use(MiddleErrorCatch);

const server = app.listen(1000, () => {
  console.log("server is working in port 1000");
});
