const { response } = require('express');
var express = require('express');
var router = express.Router();
const ProductDetails = require('../details/product-details');
const userDetails = require('../details/user-details')
const yourInLogedIn=(req,res,next)=>{
  if(req.session.logedIn){
    next()
  }else{
    req.redirect('/signin')
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  let user = req.session.user
  console.log(user);
  ProductDetails.getAllProducts().then((products) => {
    //console.log(products);
    res.render('user/index', { products, user })
  })

});
router.get('/signin', (req, res) => {
  if (req.session.logedIn) {
    res.redirect('/');
  } else{
   
    res.render('user/signin',{loginE:req.session.loginError});
    req.session.loginError=false
  }
})
router.get('/signup', (req, res) => {
  res.render('user/signup');
  //console.log('kkkkkkkkkkkkk');
})
router.post('/signup', (req, res) => {
  //console.log('post signup');
  //console.log(req.body); 
  userDetails.doSignup(req.body).then((response) => {
    console.log(response+"ooooooooooooooooo");
  })
})
router.post('/signin', (req, res) => {
  userDetails.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.logedIn =true
      req.session.user = response.user
      res.redirect('/')
    } else {
      req.session.loginError="Invalid Email address or Password"
      res.redirect('/signin')
    }
  })
})
router.get('/signout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})



router.get('/forgott-pass', (req, res) => {
  res.render('user/forgott-pass')
})
router.post('/add-f', (req, res) => {
  console.log(req.body);
  console.log('forgott pass');
  res.send('Forgott Password')
})
router.get('/carts',yourInLogedIn, (req, res,next) => {
  res.render('user/cart')
})



module.exports = router;




