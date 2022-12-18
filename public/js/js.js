var prevScrollpos = window.scrollY;
var isTrue = false;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;

        if(110 > currentScrollPos){ //헤더-네브의 높이만큼 지나갈때까지 헤더-네브가 없어지면 안된다.
            document.getElementsByClassName("header")[0].style.top = "0";
        }
        else if (prevScrollpos > currentScrollPos) { //헤더-네브의 높이를 지나고 이전 높이가 현 높이보다 크면 네브를 브라우저 상단에 고정시킨다.
            document.getElementsByClassName("header")[0].style.top = "0";
        } else {                                     // 이전 높이보다 현재 높이가 더 크면 고정된 네브를 브라우저위로 헤더-네브의 높이만큼 올려쳐버린다.
            document.getElementsByClassName("header")[0].style.top = "-110px";
        }
    prevScrollpos = currentScrollPos;
}