var Schema = require('mongoose').Schema;

var Funcionario = new Schema
({
	nombre:{type:String, required:true, maxlength: 140},
	apellido:{type:String, required:true, maxlength: 140},
	codigo: {type:Number, required:true},
	correo: {type:String, required:true, maxlength: 140},
  	contrasena: {type:String, required:true}
});

module.exports = Funcionario;
