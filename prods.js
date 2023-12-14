const div_prods = document.getElementById("div-prods");

div_prods.innerHTML = div_prods+`<div class="card" style="width: 18rem; text-align: center;">
<figure style="text-align: center;"><img class="card-img-top w-75" src="img_remedios/dipirona.jpeg" alt="Imagem de capa do card"></figure>
<div class="card-body" style="text-align: center;">
    <h5 class="card-title">${}</h5>
    <p class="card-text">R$ 8,00</p>
    <a href="#"><button class="button_comp">comprar</button></a>
</div>
</div>`