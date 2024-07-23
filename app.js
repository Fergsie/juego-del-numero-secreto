let intentos ;
let NumeroSecreto;

function crearAleatorio(){
    return Math.floor(Math.random()*10)+1;
}
   
function cambioDeTexto(elemento,texto){
    let nuevo = document.querySelector(elemento);
    nuevo.innerHTML = texto;
}
function intentoDeUsuario(){
   let numerousuario = parseInt( document.getElementById('nusuario').value);
   
   if (NumeroSecreto === numerousuario){
    cambioDeTexto('.texto__parrafo',`acertaste en ${intentos} ${intentos === 1 ? 'intento': 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else if(numerousuario > NumeroSecreto){
    cambioDeTexto('.texto__parrafo','el numero es menor');
   }else if(numerousuario < NumeroSecreto){
    cambioDeTexto('.texto__parrafo','el numero es mayor');
   }
   intentos++;
   limpiar();
}

function condiciones(){
console.log(NumeroSecreto);
cambioDeTexto('h1','juego del numero secreto');
cambioDeTexto('.texto__parrafo','ingresa un numero del 1 al 10');
intentos=1;
 NumeroSecreto = crearAleatorio();
}
function limpiar(){
    let ValorCaja = document.querySelector('#nusuario');
    ValorCaja.value = '';
}
function reiniciarp(){
    limpiar();
    condiciones();
    document.querySelector('#reiniciar').setAttribute('disable',true);
}
condiciones();
