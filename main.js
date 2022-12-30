const express = require('express');
const app = express();
const fs = require('fs');
app.get('/',function(req, res) {
  
  res.status(200).send("Hello");
});
app.listen(7217, () => console.log(`Started server at WIFI 222.103.110.36:7217/upload`));
