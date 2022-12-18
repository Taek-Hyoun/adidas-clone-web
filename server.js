var express = require('express')
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('yes')
})
app.listen(3030, () => {
    console.log('The Server is running...');
})