require('./db.js');

module.exports.createObjectWithName = function(coleccion, v1, v2, v3, v4, v5, v6, v7) {
	var obj = null;

	if(coleccion == 'Elementos'){
		obj = new Elementos({nombre:v1, estado:v2});
	}
	else if(coleccion == 'Prestamos'){
		obj = new Prestamos({idUsuario:v1, fechaEntrega:v2, fechaVencimiento:v3, estado:v4, elementos:v5});
	}
	else if(coleccion == 'Usuario'){
		obj = new Usuario({nombre:v1, apellido:v2, codigo:v3, correo:v4, contrasena:v5, rol:v6});
	}
	else if(coleccion == 'Item'){
		obj = new Item({idPrestamo:v1, idElemento:v2});
	}
	return obj;
}

module.exports.findCollectionByName = function(name)
{
	var objeto = null;

	if(name === 'Elementos'){
		objeto = Elementos;
	}
	else if(name === 'Prestamos'){
		objeto = Prestamos;
	}
	else if(name === 'Usuario'){
		objeto = Usuario;
	}
	else if(name === 'Item'){
		objeto = Item;
	}
	return objeto;
}

module.exports.updateData = function(name, key, data, service)
{
	if(name === 'Usuario')
	{
		Usuario.update({_id: key}, data, {upsert: true}, respuesta);
	}
	else if(name === 'Elementos'){
		Elementos.update({_id:key}, data, {upsert: true}, respuesta);
	}
	else if(name === 'Prestamos'){
		Prestamos.update({_id:key}, data, {upsert: true}, respuesta);
	}
	else if(name === 'Item'){
		Item.update({_id:key}, data, {upsert: true}, respuesta);
	}

	function respuesta (err)
	{
		if ( err)
		{
			return service.json({status:"fail", name:name, description:"ID_OBJECT_DONT_EXIST", value:[{}]});
		}
		else
		{
			return service.json({ status: "ok", name:name, description:"COLLECTION_QUERY_OK", value: key});
		}
	}
}
