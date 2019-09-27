
function primos(numero) {
   
    if (numero/numero==1 && numero/1==numero) {
        console.log("es número primo");
    }
    else{
        console.log("el número que ingresó, no es primo");
    }
}
var num=primos(9);   

function primo(numero) {
    for(let i=1;i<=numero;i++){
        var multiplicacion=[i]*[i];
        var res= numero%[i];

        if (multiplicacion==numero && numero!==0) {
            console.log("no es numero primo")
        }
        else{console.log("es un número primo");}
    }
    
}
var num=primo(9);