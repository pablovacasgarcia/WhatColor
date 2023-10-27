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
    vidas=3;
    resuelto=false;
    titulo = document.getElementById("titulo");
    easy = document.getElementById("easy");
    hard = document.getElementById("hard");
    newgame = document.getElementById("newgame");
    divs = document.querySelectorAll("div");
    header = document.querySelector("header");
    corazones = document.querySelectorAll("img");

    header.style.backgroundColor="darkcyan";

    corazones.forEach(corazon => {
        corazon.style.display="block";
    });


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
    if(resuelto==false){
        if (pulsado==casillaSolucion){
            divs.forEach(div => {
                div.style.backgroundColor=solucion;
            });
            titulo.innerHTML=("¡ENHORABUENA!");
            header.style.backgroundColor=solucion;
            resuelto=true;
        } else if (divs[pulsado].style.backgroundColor!="gray") {
            divs[pulsado].style.backgroundColor="gray"
            vidas--;
            corazones[vidas].style.display="none";
            if (vidas==0){
                divs.forEach(div => {
                    div.style.backgroundColor="red";
                });
                header.style.backgroundColor="red";
                titulo.innerHTML=("¡Te has quedado sin vidas!");
                resuelto=true;
            }
        }
    }
    
}

