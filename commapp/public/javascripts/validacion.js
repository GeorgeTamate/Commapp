$(function(){
	$('.form-nuevocomercio form').form({
		nombre : {
			identifier : 'nombre',
			rules : [
				{
					type : 'empty',
					prompt : 'Por favor, ingrese un nombre.'
				}
			]
		},

		codigo : {
			identifier : 'codigo',
			rules : [
				{
					type : 'empty',
					prompt : 'Por favor, ingrese un código.'
				}
			]
		},

		descripcion : {
			identifier : 'descripcion',
			rules : [
				{
					type : 'empty',
					prompt : 'Por favor, ingrese una descripción.'
				}
			]
		},

		latitud: {
			identifier : 'latitud',
			rules : [
				{
					type : 'empty',
					prompt : 'Por favor, ingrese una latitud.'
				},
				{
					type : 'number',
					prompt : 'La latitud debe ser un valor numérico.'
				}
			]
		},

		longitud : {
			identifier : 'longitud',
			rules : [
				{
					type : 'empty',
					prompt : 'Por favor, ingrese una longitud.'
				},
				{
					type : 'number',
					prompt : 'La longitud debe ser un valor numérico.'
				}
			]
		}

	});
});