const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_vaga_pcd'
});

const app = express();


app.get('/usuario', function (req, res) {

    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM usuario;', function (error, results, fields) {
      res.send(results)
    });
  });
});

app.listen(3000, () => {
 console.log('Vá ao navegador em http://localhost:3000/usuario');
});
