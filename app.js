const button_menu = document.getElementById("op");
const button_login = document.getElementById("login-icon");
const body = document.querySelector("body");
var count = 0;
var largura = body.clientWidth;

function atualizar(){
    var larg = body.clientWidth
    let cu = 
    button_login.style.width = "${larg/2}%"
}








button_menu.addEventListener('click', () => {
    console.log("clicado")
    count++;
    if(count == 1){
        menu.style.display = "block";
    }else if(count > 1){
        menu.style.display = "none";
        count = 0;
    }
});