const body = document.querySelector("body");
const button_menu = document.getElementById("button_menu");
const menu = document.getElementById("menu_hor");
var largura = body.clientWidth;
var count = 0;

function atualizar(){
    var larg = body.clientWidth
    if(larg <= 768){
        document.getElementById("p_button1").style.fontSize = '13px';
        document.getElementById("p_button2").style.fontSize = '13px';
        document.getElementById("p_button3").style.fontSize = '13px';
    }
    if(larg < 406){
        document.getElementById("p_button1").style.fontSize = '7px';
        document.getElementById("p_button2").style.fontSize = '7px';
        document.getElementById("p_button3").style.fontSize = '7px';
    }
    if(larg < 375){
        document.getElementById("bg-card1-op").style.backgroundSize = '150%';
        document.getElementById("bg-card2-op").style.backgroundSize = '150%';
        document.getElementById("bg-card4-op").style.backgroundSize = '160%';
        document.getElementById("bg-card4-op").style.backgroundPosition = "50%";
    }
    if(larg < 472){
        document.getElementById("mapa").style.display = 'none';
    }
    if(larg < 533 & larg > 373){
        document.getElementById("bg-card1-op").style.marginTop = '5%';
        document.getElementById("button1-card-op").style.width = '100%';
        document.getElementById("button2-card-op").style.width = '100%';
        document.getElementById("opening").style.display = 'block';
    }
}
button_menu.addEventListener('click', () => {
    count++;
    if(count == 1){
        menu.style.display = "block";
    }else if(count > 1){
        menu.style.display = "none";
        count = 0;
    }
});