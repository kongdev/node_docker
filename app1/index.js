var express = require("express");
const correlator = require('express-correlation-id');




const axios = require('axios');

var app = express();
var logger = require("morgan");
var port = 1111;

app.use(logger('dev'))
app.use(correlator());



const aa = () => {
  console.log('func aa request is:', correlator.getId()); // equal to above, not dependant on the req object
}
const bb = () => {
  console.log('func bb request is:', correlator.getId()); // equal to above, not dependant on the req object
  cc();
}

const cc = () => {
  console.log('func cc request is:', correlator.getId()); // equal to above, not dependant on the req object
}



app.get("/", (req, res) => {
  console.log('endpoint get request express is:', req.correlationId()); // id for this request
  console.log('endpoint get request correlator is:', correlator.getId()); // equal to above, not dependant on the req object
  
  aa();
  bb();
  // axios.get('http://localhost:2222',{ headers: { 'X-Correlation-Id': correlator.getId() } }).then(resp => { });

  
  res.send('app 1 port 1111');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});