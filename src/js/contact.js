let txt = document.getElementById("zone-texte")
let btn = document.getElementById("btn_js")
let txt2 = document.getElementById("zone-texte2")
let btn2 = document.getElementById("btn_js2")
let txt3 = document.getElementById("zone-texte3")
let btn3 = document.getElementById("btn_js3")
let txt4 = document.getElementById("zone-texte4")
let btn4 = document.getElementById("btn_js4")

btn.addEventListener("click", function(){
    if (txt.style.display == "block"){
        txt.style.display = "none" ;
    } else {
        txt.style.display = "block" ;
    }
});

btn2.addEventListener("click", function(){
    if (txt2.style.display == "block"){
        txt2.style.display = "none" ;
    } else {
        txt2.style.display = "block" ;
    }
});

btn3.addEventListener("click", function(){
    if (txt3.style.display == "block"){
        txt3.style.display = "none" ;
    } else {
        txt3.style.display = "block" ;
    }
});

btn4.addEventListener("click", function(){
    if (txt4.style.display == "block"){
        txt4.style.display = "none" ;
    } else {
        txt4.style.display = "block" ;
    }
});