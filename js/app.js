/* $(document).ready(function(){
    //console.log('funcionando')

}); */
$(document).ready(function () {
/*     $('h1').html('Etiqueta1'); // seleccionar los h1 y remplazar lo que hay en el index
    $('.display-4').html('Desde clase'); // Seleccionar un elemento en especifico
    $('#idh1').html('Desde id'); // seleccionar con id */
    //$('.container h1').html('Cambio de texto'); // cambiamos de texto todos los h1 que esten dentro de container
    // $('.container h1:first').html('Cambio de texto')// cambiamos primer texto
    //$('.container h1:last').html('Cambio de texto')// cambiamos ultimo texto

/* 
    $('#idh1').addClass('text-danger'); // cambiamos de color el texto con boostrap
    $('#idh1').removeClass('display-4'); // quitamos o agregamos clases
    $('#contenido').append('<h1>Este es un elemento al final</h1>'); // agregamos un nuevo titulo al dinal
    $('#contenido').prepend('<h1>Este es un elemento al principio</h1>');// agregamos un nuevo titulo al final
    //$('#color-azul').css('color', 'blue');//coas de css
    $('#color-azul').css({color: 'blue', background:'salmon', padding:'20px'});//ponemos color azul y fondo de color(cosas de css)

    //$('#color-azul').remove();// removemos un elemento
     $('#color-azul').hide();// ocultamos elemnto  un elemento pero no en html
     $('img').attr('src', 'https://img.redbull.com/images/c_crop,x_23,y_0,h_1544,w_1158/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2021/6/24/cmc4ylzjkldpfjdziy1z/checo-perez-caricatura');
    // ponemos imagen
    $('img:last').attr("width","50") // tama;o
 */



    //Funcion del click en los botones
/* var parrafo =$ ('#resultado p');
$('.btn-primary').click(function (e) {  // hacemos mas grande
    parrafo.addClass('display-4');
    
});

$('.btn-danger').click(function (e) {  // lo volvemos a la normalida
    parrafo.removeClass('display-4');
    
});


$('.btn-warning').click(function (e) { // lo hace grande y lo regresa a la normalidad
    parrafo.toggleClass('display-4');
    
}); */

/* $('#formulario').submit(function (evento) { 
    evento.preventDefault();
    var nombre = $('#nombre').val();
    console.log(nombre)

    
}); */


/* var resultado =$ ('#resultado');
$('.btn-primary').click(function () {  // Oculta texto
    
    resultado.hide(1000);
});

$('.btn-danger').click(function () {  // Devuleve texto
   
    resultado.show(1000);
});


$('.btn-warning').click(function () { // oculta y devuelve texto
   resultado.toggle(1000); 

});
$('.btn-success').click(function () { // lo hace grande y lo regresa a la normalidad
    resultado.fadeOut(1000);
});    
$('.btn-info').click(function () { // lo hace grande y lo regresa a la normalidad
    resultado.fadeIn(1000);
});   */ 


var resultado =$ ('#resultado');
$('.btn-info').click(function () {  // Oculta texto
    
    resultado.animate({
        left:'100px',
        opacity:'0.5',
        height:'+=150px',
        width:'+=150px'
    
},3000,function(){
    
    resultado.animate({
        left:'-0px',
        opacity:'1',
        height:'-=150px',
        width:'-=150px'
    },1000)
});

})
});