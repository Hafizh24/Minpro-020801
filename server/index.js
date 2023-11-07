const express = require("express");
const PORT = 2000;
const db = require("./models");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/public", express.static("./public"));

app.get("/api", (req, res) => {
  res.send("This is my API");
});

const { eventRouter } = require("./router");
const { userRouter } = require("./router");
app.use("/events", eventRouter);
app.use("/users", userRouter);
app.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  // db.sequelize.sync({ force: true });
  console.log(`Server running on Port : ${PORT}`);
});
