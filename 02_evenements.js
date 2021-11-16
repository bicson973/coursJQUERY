$(document).ready(function() { 
    $('h1').append(' - Les évènements');
    // Je rajoute le code à executer dans le H1 au chargement de la page. 
})  

// Première fonction pour le bouton 1 :

$('#btn1').click(function once() {
    $('h1').css({
        "color": "red",
        "text-decoration": "underline",
        // Je rajoute du css sur le H1 en cliquant sur le bouton 1. 
    })
});

// Deuxième fonction sur le bouton 2 :

$('#btn2').dblclick(function() {
    $('body').css({
        "background-color": "lightblue",
    })
});

// Troisième fonction sur le bouton 3 :
$('#btn3').click(function() {
    $('p').toggle();
    // J'affiche et désafiche tout les p de la page 
});

// Quatrième fonction sur le bouton 4 : 
$("#btn4").click(function() {
    $("h1").toggleClass("laClasse");
});

// Cinquième fonction sur le bouton 5 : 
$("#btn5").mouseenter(function(){
    $(".container").addClass("laClasse");
});

$("#btn5").mouseleave(function(){
    $(".container").removeClass("laClasse");
    // J'affiche et désafiche la couleur jaune dans le container.
});


// Une autre methode :
$("#btn5").hover(function(){
    $("navbar").addClass("classeNav");
    }, 
function(){
    $("navbar").removeClass("classeNav");
});



