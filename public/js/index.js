// TDD 방법론 사용

class Product{
    constructor(){
        this._width= '150';
        this._height= '200';
        
        this._product_name;
        this._product_category;
        this._product_wish;
    }
    setProductName(name){
        this._product_name = name;
    }
    setProductCategory(ct){
        this._product_category = ct;
    }
    setProductWish(wish){
        this._product_wish = wish;
    }
    getProductName(){
        return this._product_name;
    }
    getProductCategory(){
        return this._product_category;
    }
}
class MensOriginalShoes extends Product{

}
class MensSportsShoes extends Product{

}

let arrOriginalShoes = ['니짜 하이', 'SUPERSTAR 82', '슈퍼스타 82', '슈퍼스타', '가젤', '포럼 로우', '스탠스미스', '시티 마라톤 PT', 'NMD V3', '니짜 트레포일', '델팔라', '아딜렛 라이트', '레트로피 E5', 'BW 아미', '니짜 팔리', '실리 XT', '캠퍼스 OOS', '오젤리아'];


let mos = new MensOriginalShoes();

let container = document.getElementsByClassName('product-container');
for(let i = 0; i < arrOriginalShoes.length; i++){
    var newDiv = document.createElement('div');

    var imgDiv = document.createElement('div');
    var nameDiv = document.createElement('div');
    var cateDiv = document.createElement('div');
    var wishDiv = document.createElement('div');

    mos.setProductName(arrOriginalShoes[i]);
    mos.setProductCategory('Mens Originals');

    newDiv.setAttribute('class', `shoes mos${i}`);
    imgDiv.setAttribute('class', 'img');
    nameDiv.setAttribute('class', 'product-name');
    wishDiv.setAttribute('class', 'wishBtn');
    wishDiv.setAttribute('onclick', 'clicking(this.parentNode)');
    
    wishDiv.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    let name = document.createTextNode(mos.getProductName());
    nameDiv.appendChild(name);
    cateDiv.setAttribute('class', 'product-category');
    let cate = document.createTextNode(mos.getProductCategory());
    cateDiv.appendChild(cate);

    container[0].appendChild(newDiv);
    container[0].children[i].appendChild(imgDiv)
    container[0].children[i].appendChild(nameDiv)
    container[0].children[i].appendChild(cateDiv)
    container[0].children[i].appendChild(wishDiv);
}

function clicking(val){
    console.log(val)
}