const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const { connect } = require("./database/index");
const mainRouter = require("./routes/main");
const adminRouter = require("./routes/admin");

const app = express();
app.set("port", process.env.PORT || 3002);
connect();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/admin", adminRouter);

app.listen(process.env.PORT, function () {
  console.log("listening on 8080");
});

// app.get("/test", function (req, res) {
//   res.send("테스트야야야");
// });
