function Myfunction() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector(".header-ctn").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        document.querySelector(".header-ctn").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
}

window.onscroll = function() {Myfunction()};