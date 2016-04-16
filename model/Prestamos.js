var Schema = require('mongoose').Schema;

var Prestamos = new Schema
({
	idUsuario:{type:String, required:true},
	fechaEntrega:{type:String, required:true},
	fechaVencimiento:{type:String, required:true},
	estado:{type:String, required:true},
	elementos: []
});

module.exports = Prestamos;
