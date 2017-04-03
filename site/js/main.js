function orderNummer() {
    document.querySelector("#ordernummer").innerHTML = "Order nummer: " + "#" + Math.floor(Math.random() * 9999) + "-" + Math.floor(Math.random() * 9999) + "-" + Math.floor(Math.random() * 9999) + "-" + Math.floor(Math.random() * 9999);
}

function betalning(){
    document.querySelector(".formular_s").style.visibility="visible";
    document.querySelector(".text_s").style.visibility="visible";
    document.querySelector(".formular_fyll_1_s").style.visibility="visible";
    document.querySelector(".formular_fyll_2_s").style.visibility="visible";
}

function alertKund() {
    alert("Produkten är lagd i din kundvagn!");
    document.getElementById("kundvagn").href = "./kundvagn2.html";
}

