var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
//session
var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


app.get('/', function(request, respond){
    console.log('========> inside "/"');
    respond.render('cats');
})

app.get('/cats', function(request, respond){
    console.log('========> indside "/cats"');
    respond.render('cats');
})

app.get('/burrito', function(request, response){
    console.log('==> /burrito');
    let cat = [
        { img: 2,
        name:'Burrito', 
        food: 'spaghetti', 
        age: 3}];
    let fav_spots = ['spot1', 'spot2'];
    response.render('details', {cat: cat, fav_spots: fav_spots});
})

app.get('/talky', function(request, response){
    console.log('===> /talky');
    let cat = [
        { img: 1,
        name:'Talky', 
        food: 'Cheesecake', 
        age: 99999}];
    let fav_spots = ['moon', 'earth'];
    response.render('details', {cat: cat, fav_spots: fav_spots});
})

app.listen(8000, function(){
    console.log("listening on 8000")
})