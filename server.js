const express = require("express");
const app = express();

app.listen(process.env.PORT, function () {
  console.log("listening on 8080");
});

app.get("/test", function (req, res) {
  res.send("테스트야야야");
});
