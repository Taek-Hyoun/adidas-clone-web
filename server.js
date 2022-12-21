var express = require('express')
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/account-login', (req, res) => {
    res.render('account-login')
})
app.get('/wishlists', (req, res) => {
    res.render('wishilists');
})
app.get('/cart', (req, res) => {
    res.render('cart')
})


app.listen(3030, () => {
    console.log('The Server is running...');
})