var cookies = [];

pushCookie = (ck) => {
    cookies.push(JSON.parse(ck));
}

function setCookie() {
    if (document.cookie !== '') {
        let cookie = document.cookie;
        let array;
        let on;
        for (str of cookie) { //배열 길이를 지정하지않아 undefined가 들어가는 것을 방지
            if (str == '{') {
                array = '';
                on = 1;
            }
            if (on) {
                if (str == '}') {
                    array += str;
                    on = 0;
                    pushCookie(array);
                } else {
                    array += str;
                }
            }

        }
    }
}
setCookie();