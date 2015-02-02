


$( document ).ready(function($) {

	

	


	



   $("#mail").click(function(){

   		var emailcliente = $('#emailcliente').val();
   		var ass = $('#assunto').val();
   		var descr = $('#descricao').val();
   		var nome = $('#nomecliente').val();
   		var tlm = $('#tlmcliente').val();

   		if (!$('#emailcliente').val()|| !$('#assunto').val() || !$('#descricao').val() || !$('#nomecliente').val() || !$('#tlmcliente').val()) 
   			{
   				if (!nome) {
   					$('#nomecliente').popover('show');
   					$('#tlmcliente').popover('destroy');
   					$('#emailcliente').popover('destroy');
   					$('#assunto').popover('destroy');
   					$('#descricao').popover('destroy');
   				}else{
   					
   					if (!tlm) {
   						$('#tlmcliente').popover('show');
   						$('#nomecliente').popover('destroy');
   						$('#emailcliente').popover('destroy');
   						$('#assunto').popover('destroy');
   						$('#descricao').popover('destroy');

   					}else{
   						if (!emailcliente) {
   							$('#emailcliente').popover('show');
   							$('#nomecliente').popover('destroy');
		   					$('#tlmcliente').popover('destroy');
		   					$('#assunto').popover('destroy');
		   					$('#descricao').popover('destroy');
   						}else{
   							if (!ass) {
   								$('#assunto').popover('show');
   								$('#emailcliente').popover('destroy');
	   							$('#nomecliente').popover('destroy');
			   					$('#tlmcliente').popover('destroy');
			   					$('#descricao').popover('destroy');
   							}else{
   								if (!descr) {
   									$('#descricao').popover('show');
   									$('#emailcliente').popover('destroy');
		   							$('#nomecliente').popover('destroy');
				   					$('#tlmcliente').popover('destroy');
				   					$('#assunto').popover('destroy');
   								};
   							}
   						}
   					}
   				}

   				
   				//$("#myModal").modal('show');
   				
   			}
   		
   		else{
   	
   		

   		var sauda = "";
   		if(!nome){sauda = "usuário(a)"}
   			else {sauda=nome}

   		$("#user").text(sauda);

   		
		$.ajax({
			type:"POST",
			
			url: '/visita',
			data: {visitum:{email: emailcliente, assunto:ass, descricao:descr, nome:nome, tlm:tlm }},
			
			dataType: 'json',
			success: function(status){
				//alert("Caro(a) "+sauda +" a sua visita ficou registada! Entraremos em contacto brevemente. Obrigado(a)");
				

				$('#myModal').modal('show');
   				//location.reload();
					

			},

			error:function(status){
					alert("Erro!! Lamentamos mas a sua visita nao ficou correctamente registada. Por favor certifique-se que preencheu todos os campos. Obrigado");			
					//location.reload();
				}
					
			});

		
	
}

	});


  
  $("#closeModal").click(function(){
  		$('#myModal').modal('hide');
  		location.reload();
  });

  

   





});


