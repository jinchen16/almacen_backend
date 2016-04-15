var Schema = require('mongoose').Schema;

var Elementos = new Schema
({	
	nombre:{type:String, required:true, maxlength: 280},
	estado:{type:String, required:true, maxlength: 140}
});

module.exports = Elementos;
