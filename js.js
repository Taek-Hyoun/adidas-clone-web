var prevScrollpos = window.scrollY;

window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("header")[0].style.top = "0";
    } else {
        document.getElementsByClassName("header")[0].style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}