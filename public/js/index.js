// TDD 방법론 사용

let arrOriginalShoes = ['니짜 하이', 'SUPERSTAR 82', '슈퍼스타 82', '슈퍼스타', '가젤', '포럼 로우', '스탠스미스', '시티 마라톤 PT', 'NMD V3', '니짜 트레포일', '델팔라', '아딜렛 라이트', '레트로피 E5', 'BW 아미', '니짜 팔리', '실리 XT', '캠퍼스 OOS', '오젤리아'];


let container = document.getElementsByClassName('product-container');
let arr = [];
for(let i = 0; i < arrOriginalShoes.length; i++){
    arr[i] = {
        'index' : i,
        'name' : arrOriginalShoes[i],
        'category' : 'MensOriginalShoes',
        'btn_color' : 'grey',
        'isOn' : 'false'
        }
}

for(let i = 0; i < arr.length; i++){
    var newDiv = document.createElement('div');

    newDiv.innerHTML = `
        <div class="shoes mos${i}">
            <div class="img">
            </div>
            <div class="product-name">${arr[i].name}</div>
            <div class="product-category">${arr[i].category}</div>
            <div class="wishBtn" onclick="getCookie(${arr[i].index}, this)">
                <i class="fa-solid fa-thumbs-up">
                </i>
            </div>
        </div>
    `

    container[0].appendChild(newDiv);
}

var cookies = [];

parseCookie = (ck) => { //익명함수

    if(document.cookie !== ''){
        let cookie = ck == undefined ? document.cookie : ck;
        let array;
        let on;
        for(str of cookie){ //배열 길이를 지정하지않아 undefined가 들어가는 것을 방지
            if(str == '{'){
                array = '';
                on = 1;
            }
            if(on){ 
                if(str == '}'){
                    array += str;
                    on = 0;
                    pushCookie(array);
                }else{
                    array += str;
                }
            }
            
        }
    }
}
pushCookie = (ck) => {
    cookies.push(JSON.parse(ck));
}
parseCookie();

for(let i = 0; i < cookies.length; i++){ //처음들어왔을 때 이전에 저장한 위시리스트가 있을 때 배경색을 바꾼다.
    console.log('shit');
    let divbox = document.getElementsByClassName(`shoes mos${Number(cookies[i].index)}`);
    arr[cookies[i].index].isOn = cookies[i].isOn;
    arr[cookies[i].index].btn_color = cookies[i].btn_color;
    divbox[0].children[3].style.backgroundColor = arr[cookies[i].index].btn_color;
}

function setCookie(p, mxAge){ //쿠키세팅
    let cookie = `index${p}=`+JSON.stringify(arr[p]) + ";" + 'max-age='+mxAge+';'
    document.cookie = cookie;
    parseCookie(cookie);
}

function getCookie(param, ele){ //쿠키 가져오기

        if(JSON.parse(arr[param].isOn)){
            deleteCookie(param, -1);
            arr[param].btn_color = 'grey';
            arr[param].isOn = false;
            ele.style.backgroundColor = arr[param].btn_color;
            //쿠키삭제 코드
        }else{// if there's no cookie in array cookies
            arr[param].btn_color = 'gold';
            arr[param].isOn = true;
            ele.style.backgroundColor = arr[param].btn_color;
            setCookie(param,3600);
        }
}

function deleteCookie(p, mxAge){
    document.cookie = `index${p}=`+JSON.stringify(arr[p]) + ";" + 'max-age='+mxAge+';';
    cookies = (cookies.filter(obj => obj.index !== p ));

}
