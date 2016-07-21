var mysql = require('mysql');
//var dateFormat = require('dateformat');

// comercios controller

module.exports = {

	//funciones del controlador

	getComercios : function(req, res, next) {
		var config = require('.././database/config');

		var db = mysql.createConnection(config);
		db.connect();

		var comercios = null;

		db.query('SELECT * FROM comercios', function (err, rows, fields) {
			if(err) throw err;

			comercios = rows;
			db.end();

			res.render('comercios/comercios', {comercios : comercios});
		});
	},

	getNuevoComercio : function(req, res, next) {
		res.render('comercios/nuevo');
	},

	postNuevoComercio : function(req, res, next) {

		//var fechaactual = new Date();
		//var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');

		var comercio = {
			nombre : req.body.nombre,
			codigo : req.body.codigo,
			descripcion : req.body.descripcion,
			latitud : req.body.latitud,
			longitud : req.body.longitud
		}

		var config = require('.././database/config');

		var db = mysql.createConnection(config);
		db.connect();

		db.query('INSERT INTO comercios SET ?', comercio, function (err, rows, fields){
			if(err) throw err;

			db.end();
		});

		res.render('comercios/nuevo', {info : 'Comercio creado exitosamente.'});

		//console.log(comercio);

		//console.log(req.body);
	},

	eliminarComercio : function(req, res, next){
		var id = req.body.id;

		var config = require('.././database/config');

		var db = mysql.createConnection(config);
		db.connect();

		var respuesta = {res : false};

		db.query('DELETE FROM comercios WHERE id_comercio = ?', id, function (err, rows, fields){
			if(err) throw err;

			db.end();
			respuesta.res = true;

			res.json(respuesta);
		});
	},

	getModificarComercio : function(req, res, next) {
		var id = req.params.id;
		console.log(id);

		var config = require('.././database/config');

		var db = mysql.createConnection(config);
		db.connect();

		var comercio = null;

		db.query('SELECT * FROM comercios WHERE id_comercio = ?', id, function (err, rows, fields){
			if(err) throw err;

			comercio = rows;
			db.end();

			res.render('comercios/modificar', {comercio : comercio});
		});
	},

	postModificarComercio : function(req, res, next) {

		var comercio = {
			nombre : req.body.nombre,
			codigo : req.body.codigo,
			descripcion : req.body.descripcion,
			latitud : req.body.latitud,
			longitud : req.body.longitud
		};

		var config = require('.././database/config');

		var db = mysql.createConnection(config);
		db.connect();

		db.query('UPDATE comercios SET ? WHERE ?', [comercio, {id_comercio : req.body.id_comercio}], function (err, rows, fields){
			if(err) throw err;

			db.end();
		});

		res.redirect('/comercios');
		location.reload();
	}

}