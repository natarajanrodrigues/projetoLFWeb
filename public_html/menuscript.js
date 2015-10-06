/*

Instituto Federal de Educação Ciências e Tecnologia da Paraíba – IFPB
Campos Cajazeiras 
Curso: Análise e Desenvolvimento de Sistemas 
Disciplina: LFWeb
Professor: Francisco Genemes
Aluno: Natarajan Rodrigues 


Projeto referente à 2a Avaliação da Disciplina

*/



/*
 * Script utilizado no menu dinâmico
 * A depender do tamanho da tela, a página mostrará o menu normal ou um simplificado que ser escondido.
 */
 

( function( $ ) {
$( document ).ready(function() {
// Guarda os elementos necessários
var menu = $('.menu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('.menu-icone');

// Cria o menu com barras
menuList.prepend('<div class="menu-icone"><a href="#"></a></div>');


// Alterna a divibilidade do menu em barras ou normal
menu.on('click', '.menu-icone', function(){
   listItems.toggleClass('collapsed');
   
});
});
} )( jQuery );

