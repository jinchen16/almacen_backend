var mongoose = require('mongoose'),
db_url = 'localhost/Almacen';
db = mongoose.createConnection(db_url);

var schema_Elementos = require('./model/Elementos.js');
Elementos = db.model('Elementos', schema_Elementos);

var schema_Prestamos = require('./model/Prestamos.js');
Prestamos = db.model('Prestamos', schema_Prestamos);

var schema_Usuario = require('./model/Usuario.js');
Usuario = db.model('Usuario', schema_Usuario);

var schema_Item = require('./model/Item.js');
Item = db.model('Item', schema_Item);

module.exports = db;
module.exports = mongoose;
