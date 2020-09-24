var express = require("express");
var app = express();

var port = 2222;

app.get("/", (req, res) => {
  res.send('app 2 port 2222');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});