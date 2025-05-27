var letra1 = "a";
let letra2 = "b";
let letra3 = "c";

const letras = "a,b,c";

function mostraletras(alfabeto) {
    let letrasArray = alfabeto.split(",");
    letrasArray.forEach(function(letra) {
        console.log(letra);
    });


}