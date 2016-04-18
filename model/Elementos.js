var Schema = require('mongoose').Schema;

var Elementos = new Schema
({	
	//id:{type:String, required: true, maxlength:140},
	nombre:{type:String, required:true, maxlength: 280},
	estado:{type:String, required:true, maxlength: 140}
});

module.exports = Elementos;
