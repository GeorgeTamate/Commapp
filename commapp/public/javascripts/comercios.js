$(function(){

	//funcion ajax para eliminar comercio
	$('#tbl-comercios #btn-eliminar').click(function(e){
		e.preventDefault();
		var elemento = $(this);
		var id = elemento.parent().parent().find('#id_comercio').text();

		var confirmar = confirm('¿Desea eliminar el comercio?');

		if(confirmar){
			$.ajax({
				url : 'http://localhost:3000/eliminarcomercio',
				method : 'post', //o tambien se puede 'delete'
				data : {id : id},
				success : function(res){
					if(res.res){
						elemento.parent().parent().remove();
					}
				}
			});
		}

		
	});
});