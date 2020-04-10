const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("Hello World!");
})

app.listen(4444, function () {
  console.log('App démarrée au port 4444!');
})