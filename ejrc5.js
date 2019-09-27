
var num1= 5;
var num2 =8;
if(num1>num2){
    alert("numero 1 no es mayor que num2");
}
if(num2>0){
    alert("numero 2 es positivo");
}
if(num1<0){
    alert("numero 1 es negativo o distinto 0");
}
if(num1++>num2){
    alert("incrementar en 1 unidad el valor de número 1 no lo hace mayor o igual que número 2");
}

var num1= 99999999;
var num2 =23;
resu=  num1%num2;
//ejercicio 6
var num2 =23;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var usr=prompt("escribe tu número DNI","");
var vlor=usr;
if (usr<0||usr>99999999) {
    alert("el número proporcionado no es válido");
}
else{
    resu=usr%23;
    alert(resu);
    alert("la letra que corresponde a tu DNI es la letra: "+ letras[resu]);
}
//ejercicio 7
var num=7;
var resultado=1;
for (let i = 1; i <= num;i++){
 resultado*=i;
}
alert(resultado);

//ejercicio 8
//número par o impar
function ejer(numeroEn) {
    if (numeroEn%2==0) {
        console.log("el número que usted ingresó es par");
    }
    else{
        console.log("el número que ingresó es impar");
    }
}
var num= ejer(11);
//ejercicio 9
//cadena de texto para ver si está formada por minúsculas o mayúsculas
function cadena(cadenaText) {
    if (cadenaText==cadenaText.toUpperCase()) {
        console.log("el texto está solo formado por mayúsculas");
    }
    else if (cadenaText==cadenaText.toLowerCase()) {
        console.log("el texto está formado por minúsculas");
    }
    else{
        console.log("el texto está formado por mayúsculas y minúsculas")
    }
    
}
var cade=cadena("hola mi amor");
//ejercicio 10
// cadena de texto para ver si se le pasó un palindromo
function palindromo(cadenaText) {
    
}
var cade=palindromo("la ruta nos aportó otro paso natural");
var nom="hola bebé como estás";
res=nom.length; //ver numero de letras para conocer el último caracter
console.log(res)
res=nom.charAt(1);
res2=nom.charAt();
console.log(res);
console.log(res2);