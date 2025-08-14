// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //capturar el valor del campo de entrada 
    let valorCaja = document.querySelector('#amigo');
    //validar entrada
    if (valorCaja.value == "") {
        alert("Por favor ingresar un nombre");
    } else {
        amigos.push(valorCaja.value);
        console.log(amigos);
        valorCaja.value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''
    for (let index = 0; index < amigos.length; index++) {
        console.log(amigos[index]);
        lista.innerHTML += amigos[index] + '<li>';
    }
}

function sortearAmigo() {
    if (amigos == ""){
        console.log("listado vacio");
    } else {
        let numero = Math.floor(Math.random()*amigos.length);
        let lista = document.querySelector('#listaAmigos');
        console.log("hay " + numero +" amigos");
        lista.innerHTML = "tu amigo secreto es: "+ amigos[numero];
    }
}