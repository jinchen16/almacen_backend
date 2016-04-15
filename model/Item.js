var Schema = require('mongoose').Schema;

var Item = new Schema
({
	idPrestamo:{type:String, required:true},
	idElemento:{type:String, required:true}	
});

module.exports = Item;
