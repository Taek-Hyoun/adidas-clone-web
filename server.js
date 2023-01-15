const db = require('./db');
const bp = require('body-parser');
const outModule = require('../adidas-clone-web/public/js/modules');

var express = require('express')
var router = express.Router();
var app = express();

var session = require('express-session');                      
var MySQLStore = require('express-mysql-session')(session);    
var options ={                                                 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rlghlek153',
    database: 'adidas'
};
var sessionStore = new MySQLStore(options);                    
app.use(session({                                              
  secret:"asdfasffdas",
  resave:false,
  saveUninitialized:false,
  store: sessionStore,
  cookie: {
    // Session expires after 1 min of inactivity.
    // expires: new Date(Date.now() + 60 * 1000), // plus 1 minute
    // maxAge: 60 * 1000 //1 minute
  }                                      
}))

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bp.json()); 
app.use(bp.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    res.render('index',{
        id: req.session.uid,
        isTrue: req.session.isLogined,
    })
});

app.get('/account-login', (req, res) => {
    res.render('account-login')
})
app.post('/do-login', (req, res) => {
    outModule.select(req.body.id, req.body.pw).then(
        (rs) => {
            req.session.uid = rs.id;
            req.session.isLogined = true;
            req.session.save(function(){
                res.redirect('/');
            });
        }
    )
})
app.get('/do-logout', (req,res) => {
    req.session.destroy();
    res.redirect('/')
})
app.get('/my-page3', (req,res) => {
    //
})
app.get('/wishlists', (req, res) => {
    res.render('wishilists',{
        id: req.session.uid,
        isTrue: req.session.isLogined,
    });
})
app.get('/cart', (req, res) => {
    res.render('cart',{
        id: req.session.uid,
        isTrue: req.session.isLogined,
    })
})
app.get('/purchase', (req, res) => {
    if(req.session.isLogined){
        outModule.selectUserInfo(req.session.uid).then(
            (rs) => {
                console.log(rs);
                //db를 외부조인해서 아이디에 맞는 유저정보를 가져와서 펄체이스 페이지에 뿌린다.
                //뿌린정보를 템플릿엔진의 인풋들에다 맞게 뿌린다.
            }
        )
        res.render('purchase', {})
    }else{
        res.redirect('/account-login')
    }
})
app.post('check-order', (req, res) => {
    res.render('check')
})
app.get('/mens', (req,res) => {
    res.render('adidas-product',{
        id: req.session.uid,
        isTrue: req.session.isLogined,
    })
})

app.listen(3030, () => {
    console.log('The Server is running...');
})

