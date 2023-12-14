const body = document.querySelector("body");
const button_submit = document.getElementById("button1-form");
var largura = body.clientWidth;
const button_menu = document.getElementById("button_menu");
const menu = document.getElementById("menu_hor");
var count = 0;

function atualizar(){

    var inp_cpf = document.getElementById("cpf").value;
    var inp_tel = document.getElementById("tel").value;
    var larg = body.clientWidth
    inp_tel = parseInt(inp_tel);
    inp_cpf = parseInt(inp_cpf);

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
    if(larg < 360){
        document.getElementById("form-contain").style.marginLeft = "1%";
        document.getElementById("form-contain").style.marginRight = "1%";
    }
    var quant_cpf = String(inp_cpf). match(/\d/g). length;
    var quant_tel = String(inp_tel). match(/\d/g). length;
    if(quant_cpf == 11 & quant_tel == 10){
        button_submit.setAttribute('type', 'submit');
    }
}
button_submit.addEventListener('click', ()=>{
    var inp_cpf = document.getElementById("cpf").value;
    var inp_tel = document.getElementById("tel").value;
    inp_tel = parseInt(inp_tel);
    inp_cpf = parseInt(inp_cpf);
    var quant_cpf = String(inp_cpf). match(/\d/g). length;
    var quant_tel = String(inp_tel). match(/\d/g). length;

    if(quant_cpf != 11 & quant_tel != 10){
        alert("campos de cpf e telefone foram preenchihdos incorretamente!");
    }else if(quant_cpf != 11){
        alert("campo de cpf foi preenchido incorretamente!");
    }else if(quant_tel != 10){
        alert(quant_tel)
        alert("campo de telefone preenchido incorretamente!");
    }
});

button_menu.addEventListener('click', () => {
    count++;
    if(count == 1){
        menu.style.display = "block";
    }else if(count > 1){
        menu.style.display = "none";
        count = 0;
    }
});