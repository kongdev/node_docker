var express = require("express");
const correlator = require('express-correlation-id');
var app = express();
var logger = require("morgan");
var port = 2222;

app.use(logger('dev'))
app.use(correlator());
app.get("/", (req, res) => {
  console.log('ID for this request is:', req.correlationId()); // id for this request
  console.log('ID for this request is:', correlator.getId()); // equal to above, not dependant on the req object
  res.send('app 2 port 2222');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});