const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect Database
connectDB();
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Virtual Health Center Experience" })
);
//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/patients", require("./routes/patients"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
