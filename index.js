const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("Hello World!");
})

app.route('/book/:id')
  .get(function(req, res) {
    // Essayer de requêter /book/42?name=Tchoupi dort chez Papi et Mamie ! Quelle est la diférence entre les deux paramètres ? 
    res.send('Get a random book #' + req.params.id + ' named ' + req.query.name);
    // Essayer ensuite d'enlever le paramètre "name"
  })
  .post(function(req, res) {
    res.send('Add a book #' + req.params.id);
  })
  .put(function(req, res) {
    res.send('Update the book #' + req.params.id);
  });

app.listen(4444, function () {
  console.log('App démarrée au port 4444!');
})