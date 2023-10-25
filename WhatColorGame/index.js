window.onload = () =>
{   
    nivel=3
    jugar(nivel);
    newgame.addEventListener("click", () => {jugar(nivel)})
    easy.addEventListener("click", () => {nivel=3;jugar(nivel)})
    hard.addEventListener("click", () => {nivel=6;jugar(nivel)})
    for (let i=0; i<6; i++){
        divs[i].addEventListener("click", ()=>{pulsado=i; compruebaSolucion()})
    }
    

}

casillaSolucion=-1
pulsado=-1;

function jugar(nivel){
    resuelto=false;
    titulo = document.getElementById("titulo");
    easy = document.getElementById("easy");
    hard = document.getElementById("hard");
    newgame = document.getElementById("newgame");
    divs = document.querySelectorAll("div");
    header = document.querySelector("header");

    header.style.backgroundColor="darkcyan";



    if (nivel==3){
        divs[3].style.display="none";
        divs[4].style.display="none";
        divs[5].style.display="none";
    } else {
        divs[3].style.display="block";
        divs[4].style.display="block";
        divs[5].style.display="block";
    }

    solucion = generarColor();

    titulo.innerHTML=(solucion);

    casillaSolucion=Math.floor(Math.random() * nivel)

    
    for (let i=0; i<nivel; i++){
        if (i==casillaSolucion){
            divs[i].style.backgroundColor=solucion;
        } else {
            divs[i].style.backgroundColor=generarColor();
        }
    }


}


function generarColor(){
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);

    return ("RGB("+R+", "+G+", "+B+")");
}

function compruebaSolucion(){
    if (pulsado==casillaSolucion){
        divs.forEach(div => {
            div.style.backgroundColor=solucion;
        });
        header.style.backgroundColor=solucion;
    }
}

