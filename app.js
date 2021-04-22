const express = require("express");
const app = express();
const path = require("path");

// Port number
const PORT = process.env.PORT || 3000;

// Serve Static Files
app.use(express.static("public"));

// Express Middleware
app.use(express.json());

// Import Database connection
const connectDB = require("./config/db");
connectDB();

// Templete Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show.js"));
app.use("/files/download", require("./routes/download"));

// Listening on Server
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
