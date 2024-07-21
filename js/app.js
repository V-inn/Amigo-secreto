var amigos = [];
var amigosSorteados = [];

function adicionar(){
    const nomeDoAmigo = document.getElementById("nome-amigo").value;
    const listaDeAmigos = document.getElementById("lista-amigos");

    amigos.push(nomeDoAmigo);
    listaDeAmigos.innerText += listaDeAmigos.innerText == "" ? nomeDoAmigo : ", " + nomeDoAmigo; 
}

function sortear(){
    document.getElementById("lista-sorteio").innerHTML = "";
    amigosSorteados = [];

    const listaSorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < amigos.length; i ++){
        var amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        if(amigos[i] == amigoSorteado){
            if(amigosSorteados.length == amigos.length -1){
                document.getElementById("lista-sorteio").innerHTML = "";
                amigosSorteados = [];
                i = -1;
            }else{
                i--;
            }
        }else if(amigosSorteados.indexOf(amigoSorteado) != -1){
            i--;
        }else{
            listaSorteio.innerHTML += `${amigos[i]} --> ${amigoSorteado} </br>`;  
            amigosSorteados.push(amigoSorteado);
        }
    }
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    amigos = [];
    amigosSorteados = [];
}