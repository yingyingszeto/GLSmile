$(function() {
			
				$('#nav_down').fadeIn('slow');  
				
				$('#nav_down').click(
					function (e) {
						$('html, body').animate({scrollTop: '1024px'}, 800);
					}
				);
				
            });