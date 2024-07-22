var amigos = [];
var amigosSorteados = [];

function adicionar(){
    const nomeDoAmigo = document.getElementById("nome-amigo").value;
    const listaDeAmigos = document.getElementById("lista-amigos");

    if(nomeDoAmigo == ""){
        alert("Insira um nome.");
    }else if(amigos.indexOf(nomeDoAmigo) != -1){
        alert("Esse nome já está presente na lista.");
    } else{
        if(amigos.length == 0){
            listaDeAmigos.innerHTML = `<button id="amigo-${nomeDoAmigo}" onclick="removerAmigo('${nomeDoAmigo}')" type="button">${nomeDoAmigo}</button>`;
        }else{
            listaDeAmigos.innerHTML += `, <button id="amigo-${nomeDoAmigo}" onclick="removerAmigo('${nomeDoAmigo}')" type="button">${nomeDoAmigo}</button>`;
        }

        amigos.push(nomeDoAmigo);

    }
}

function sortear(){
    if(amigos.length < 2){
        alert("Por favor adicione no mínimo dois amigos.");
        return;
    }

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

function removerAmigo(amigo){
    amigos.splice(amigos.indexOf(amigo), 1);

    var element = document.getElementById("amigo-"+amigo);

    if(element.previousSibling != null){
        element.previousSibling.remove();
    }

    element.remove();
}