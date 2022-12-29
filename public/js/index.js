// TDD 방법론 사용

let arrOriginalShoes = ['니짜 하이', 'SUPERSTAR 82', '슈퍼스타 82', '슈퍼스타', '가젤', '포럼 로우', '스탠스미스', '시티 마라톤 PT', 'NMD V3', '니짜 트레포일', '델팔라', '아딜렛 라이트', '레트로피 E5', 'BW 아미', '니짜 팔리', '실리 XT', '캠퍼스 OOS', '오젤리아'];


let container = document.getElementsByClassName('product-container');
let arr = [];
for(let i = 0; i < arrOriginalShoes.length; i++){
    arr[i] = {
        'index' : i,
        'name' : arrOriginalShoes[i],
        'category' : 'MensOriginalShoes',
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
            <div class="wishBtn" onclick="shit(${arr[i].index})">
                <i class="fa-solid fa-thumbs-up">
                </i>
            </div>
        </div>
    `

    container[0].appendChild(newDiv);
}

function clicking(val){
    console.log(val)
}

shit = (param) => {
    document.cookie = JSON.stringify(arr[param]) + ";" + "max-age=300";
}