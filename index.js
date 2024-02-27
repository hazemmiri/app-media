const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection  error :"));
db.once("open", function () {
  console.log("database connected successfully ...");
});

app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: ["GET", "POST", "PUT", "DELETE"]
//   }

app.use(cors({origin: "http://localhost:3000"}));
app.get("/", (req, res) => {
  res.send("hello social media app");
});
const userRoutes = require("./routes/user.router");

app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listen on port ${process.env.PORT}`);
});
