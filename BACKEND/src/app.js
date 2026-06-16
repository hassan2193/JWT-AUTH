const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5000", "https://jwt-auth-api.netlify.app"],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("JWT Auth API is Running ...");
});

module.exports = app;
