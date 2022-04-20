/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

/*
Estrategia de resolución: 
Hacer las funciones necesarias para que ante cada ingreso de palabras pueda recorrerse
letra por letra y generar una salida que modifique las letras según el criterio propuesto.

Etapas:
1- Obtener el text
*/




var arrayEncriptacion = crearArrayEncriptacion();

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");



botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var mensaje = document.querySelector("#input-texto");
    console.log(mensaje.value)
    var texto = mensaje.value

    var textoEncriptado = encriptarOdesencriptar(texto,0);
    recuadroMensaje(textoEncriptado);

    console.log(textoEncriptado);
    var textoDesencriptado = encriptarOdesencriptar(textoEncriptado,1);
    console.log(textoDesencriptado);
});


botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var mensaje = document.querySelector("#input-texto");
    console.log(mensaje.value)
    var texto = mensaje.value
    
    var textoDesencriptado = encriptarOdesencriptar(texto,1);
    recuadroMensaje(textoDesencriptado);

    console.log(textoDesencriptado);
    var textoEncriptado = encriptarOdesencriptar(textoDesencriptado,0);
    console.log(textoEncriptado);

});

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var mensaje = document.querySelector("#msg");
    console.log(mensaje.value)
    mensaje.select();
    document.execCommand("copy");

})


//Array con las reglas de encriptación
function crearArrayEncriptacion(){
    return arrayEncriptacion = [["a","e","i","o","u"],["ai","enter","imes","ober","ufat"]];
}


//Función que recibe un string y devuelve oto de acuerdo a las reglas establecidas de encriptación o desencripatación
//0 = Encriptar / 1 = Desencriptar. La función recibe como parámetros el texto y 0 o 1 de acuerdo a la acción a realiar (encriptar o desencriptar)
function encriptarOdesencriptar(texto,accion){
    var dimTexto = texto.length;
    var agregarTexto = "";
    var textoEncriptado = "";

    for (var i=0;i<dimTexto;i++){

        agregarTexto = texto[i];

        for (var j=0;j<arrayEncriptacion[accion].length;j++){
            var dimPatron = arrayEncriptacion[accion][j].length;
        
            if (((dimTexto-i)>=dimPatron) && (texto.substring(i,i+dimPatron)==arrayEncriptacion[accion][j])){
//            if (texto.substring(i,i+dimPatron)==arrayEncriptacion[1][j]){
                var inversaAccion = 0; //variable para establecer el el valor inverso de la acción elegida para obtener el string correspondiente a encriptar o desencriptar (Ej: si accion == 0 entonces inversaAccion == 1)
                if (accion==0){
                    inversaAccion = 1;
                }    
                agregarTexto = arrayEncriptacion[inversaAccion][j];
                i=i+dimPatron-1;
            }
        }
        textoEncriptado = textoEncriptado+agregarTexto;
    }   
    return textoEncriptado;
}


function recuadroMensaje(texto){
    var mensaje = document.querySelector("#msg");
    mensaje.value = texto;
    console.log(mensaje.value)

}





//Código no utilizado


/*
//Función que recibe un string y devuelve oto de acuerdo a las reglas establecidas
function encriptar(texto){
    var dimTexto = texto.length;
    var agregarTexto = "";
    var textoEncriptado = "";

    for (var i=0;i<dimTexto;i++){
        console.log(texto[i]);
        switch(texto[i]){
            case arrayEncriptacion[0][0]:
                agregarTexto = arrayEncriptacion[1][0];
                break;
            case arrayEncriptacion[0][1]:
                agregarTexto = arrayEncriptacion[1][1];
                break;
            case arrayEncriptacion[0][2]:
                agregarTexto = arrayEncriptacion[1][2];
                break;
            case arrayEncriptacion[0][3]:
                agregarTexto = arrayEncriptacion[1][3];
                break;
            case arrayEncriptacion[0][4]:
                agregarTexto = arrayEncriptacion[1][4];
                break;
            default:
                agregarTexto = texto[i];
        } 
        textoEncriptado = textoEncriptado+agregarTexto;
    }
    return textoEncriptado;

}
*/