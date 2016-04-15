console.log('Servidor Basico');

var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var service = require('./service.js');

app.use(express.static(__dirname + "/app"));

app.get('/create/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7',service.create);
app.get('/read/:collection',service.read);
app.get('/delete/:collection/:param/:value',service.delete);

//Métodos que se está utilizando actualmente
app.get("/registrar/:collection/:v1/:v2/:v3/:v4/:v5/:v6", service.registrar);
app.get("/login/:collection/:codigo/:contrasena", service.login);
app.get('/read/:collection/:param/:value',service.readX);
app.get('/update/:collection/:v1/:v2/:v3/:v4/:v5/:v6/:v7/:id',service.update);
//app.get("/buscarUsuarios/:collection/:param/:value", service.buscarUsuarios);

http.createServer(app).listen(port);
console.log("Servidor Backend por el puerto " + port);
