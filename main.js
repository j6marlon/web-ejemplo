// JavaScript Document
$(document).ready(main);
	var contador = 1;
	function main(){
		$('.menu-bar').click(function(){
			if(contador == 1){
				$('nav').animate({
					right: '0'					
				});
				$('header .menu-bar button').addClass("open");
				contador=0;			
			}else{
				contador = 1;
				$('nav').animate({
					right: '-100%'
				});
				$('header .menu-bar button').removeClass("open");				
			}
		});
		//Mostramos y ocultamos Submenus
		$('.submenu').click(function(){
			$(this).children('.children').slideToggle();	
		});			
	};