var factory = require('./factory.js');

module.exports.create = function (request,response) {
	var tabla = request.params.collection;
	var v1 = request.params.v1;
	var v2 = request.params.v2;
	var v3 = request.params.v3;
	var v4 = request.params.v4;
	var v5 = request.params.v5;
	var v6 = request.params.v6;
	var v7 = request.params.v7;

	var object = factory.createObjectWithName(tabla,v1,v2,v3,v4,v5,v6,v7);
	var existe = false;

	if ( object !== null)
	{
		existe = true;
	}

	if ( existe)
	{
		object.save(onSaved);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function onSaved(err)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_ALLOW_INSERTION", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_INSERTION_OK", value:[{_id:object._id}]});
		}
	}
}

module.exports.read = function (request,response) {
	var tabla = request.params.collection;

	var object = factory.findCollectionByName(tabla);
	var existe = false;

	if (object !== null)
	{
		existe = true;
	}

	if ( existe == true)
	{
		object.find().exec(buscarDatos)
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}
	//collection.find().where(param).equals(value).exec(buscarDatos);

	function buscarDatos(err,items)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_BAD_QUERY", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_QUERY_OK", value:items});
		}
	}
}

module.exports.readX = function (request,response) {
	var tabla = request.params.collection;
	var param = request.params.param;
	var value = request.params.value;

	var object = factory.findCollectionByName(tabla);
	var existe = false;

	if (object !== null)
	{
		existe = true;
	}

	if ( existe == true)
	{
		object.find().where(param).equals(value).exec(buscarDatos);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function buscarDatos(err,items)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_BAD_QUERY", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_QUERY_OK", value:items});
		}
	}
}

module.exports.update = function (request,response) {
	var tabla = request.params.collection;
	var v1 = request.params.v1;
	var v2 = request.params.v2;
	var v3 = request.params.v3;
	var v4 = request.params.v4;
	var v5 = request.params.v5;
	var v6 = request.params.v6;
	var v7 = request.params.v7;
	var id = request.params.id;

	var objeto = factory.createObjectWithName(tabla,v1,v2,v3,v4,v5,v6,v7);

	if ( objeto == null)
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}
	else
	{
		var updatedData = objeto.toObject();
		delete updatedData._id;
		return factory.updateData(tabla, id, updatedData, response);
	}}

module.exports.delete = function (request,response) {
	var tabla = request.params.tabla;
	var param = request.params.param;
	var value = request.params.value;

	var coleccion = factory.findCollectionByName(tabla);

	if(coleccion != null)
	{
		coleccion.remove().where(param).equals(value).exec(buscarDatos);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function buscarDatos(err,item)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_BAD_QUERY", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_REMOVE_FAIL", value:[{}]});
		}
	}
}

module.exports.registrar = function (request,response) {
	var tabla = request.params.collection;
	var v1 = request.params.v1;
	var v2 = request.params.v2;
	var v3 = request.params.v3;
	var v4 = request.params.v4;
	var v5 = request.params.v5;
	var v6 = request.params.v6;
	var v7 = request.params.v7;

  	var object = factory.createObjectWithName(tabla,v1,v2,v3,v4,v5,v6,v7);
	var existe = false;

	if ( object !== null)
	{
		existe = true;
	}

	if ( existe)
	{
		object.save(onSaved);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function onSaved(err)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_ALLOW_INSERTION", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_INSERTION_OK", value:[{_id:object._id}]});
		}
	}
}

module.exports.login = function (request,response) {
	var tabla = request.params.collection;
	var codigo = request.params.codigo;
	var contrasena = request.params.contrasena;

	var object = factory.findCollectionByName(tabla);
	var existe = false;

	if (object !== null)
	{
		existe = true;
	}

	if ( existe == true)
	{
		object.find().where("codigo").equals(codigo).where("contrasena").equals(contrasena).exec(buscarDatos);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function buscarDatos(err,items)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_BAD_QUERY", value:[{}]});
		}
		else
		{
			if(items.length > 0){
				//window.alert("Inicio de Sesión OK");
			}else{
				//window.alert("Inicio de Sesión Fallido por Datos Incorrecto");
			}
			return response.json({status:"ok", name:tabla, description:"COLLECTION_QUERY_OK", value:items});
		}
	}
}

//Para buscar según dos parámetros
module.exports.buscarPrestamo = function (request,response) {
	var tabla = request.params.collection;
	var param1 = request.params.param1;
	var v1 = request.params.v1;
	var param2 = request.params.param2;
	var v2 = request.params.v2;

	var object = factory.findCollectionByName(tabla);
	var existe = false;

	if (object !== null)
	{
		existe = true;
	}

	if ( existe == true)
	{
		object.find().where(param1).equals(v1).where(param2).equals(v2).exec(buscarDatos);
	}
	else
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}

	function buscarDatos(err,items)
	{
		if(err)
		{
			return response.json({status:"fail", name:tabla, description:"COLLECTION_BAD_QUERY", value:[{}]});
		}
		else
		{
			return response.json({status:"ok", name:tabla, description:"COLLECTION_QUERY_OK", value:items});
		}
	}
}

module.exports.agregarElemento = function(request, response){
	var tabla = request.params.collection;
	var id = request.params.id;
	var v1 = request.params.v1;
	
	var objeto = factory.createObjectAux(tabla,v1);

	if ( objeto == null)
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}
	else
	{
		var data = objeto.toObject();
		delete data._id;
		return factory.pushObject(tabla, id, data, response);
	}	
}

module.exports.eliminarElemento = function(request, response){
	var tabla = request.params.collection;
	var id = request.params.id;
	var v1 = request.params.v1;
	
	var objeto = factory.createObjectAux(tabla,v1);
	
	if ( objeto == null)
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}
	else
	{
		var data = objeto.toObject();
		//delete data._id;
		return factory.pullObject(tabla, id, data, response);
	}
}


module.exports.cambiarCampo = function(request, response){
	var tabla = request.params.collection;
	var id = request.params.id;
	var v1 = request.params.v1;
	
	var tablaAux = tabla+'Aux';
	
	var objeto = factory.createObjectAux(tablaAux,v1);
	
	if(objeto == null)
	{
		return response.json({status:"fail", name:tabla, description:"COLLECTION_DONT_EXIST", value:[{}]});
	}
	else
	{
		var data = objeto.toObject();
		delete data._id;
		return factory.changeField(tabla, id, data, response);
	}
}