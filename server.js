const db = require('./db');
const bp = require('body-parser');
const outModule = require('../adidas-clone-web/public/js/modules');

var express = require('express')
var app = express();

var session = require('express-session');                      
var MySQLStore = require('express-mysql-session')(session);    
var options ={                                                 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rlghlek153',
    database: 'mysql'
};
var sessionStore = new MySQLStore(options);                    
app.use(session({                                              
  secret:"asdfasffdas",
  resave:false,
  saveUninitialized:true,
  store: sessionStore                                          
}))

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bp.json()); 
app.use(bp.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/account-login', (req, res) => {
    res.render('account-login')
})
app.post('/do-login', (req, res) => {
    outModule.select(req.body.id, req.body.pw).then(
        (rs) => {
            console.log(rs);
        }
    )
})


app.get('/wishlists', (req, res) => {
    res.render('wishilists');
})
app.get('/cart', (req, res) => {
    res.render('cart')
})

app.get('/mens', (req,res) => {
    res.render('adidas-product')
})

app.listen(3030, () => {
    console.log('The Server is running...');
})

