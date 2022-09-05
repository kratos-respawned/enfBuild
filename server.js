const express = require("express");
const app = express();
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/", express.static(__dirname + ""));
app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});
app.get("/*", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is working on port %d`, port);
});
