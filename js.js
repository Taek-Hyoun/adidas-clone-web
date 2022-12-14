const headerheight = document.querySelector('.header');
let last = 110;
gap = 1;
document.addEventListener('scroll', () => {
    currentposition = scrollY;

    if (Math.abs(last - currentposition) <= gap) return;
    else if (currentposition > last || currentposition <= headerheight.clientHeight) {
        headerheight.classList.remove("downdown");
    }
    else if (currentposition < last) {
        headerheight.classList.add("downdown");
    }
    last = currentposition;
})