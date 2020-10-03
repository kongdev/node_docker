var express = require("express");
var app = express();
var logger = require("morgan");
var port = 1111;

app.use(logger('dev'))
app.get("/", (req, res) => {
  res.send('app 1 port 1111');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});