var express = require('express');
var router = express.Router();
const ProductDetails = require('../details/product-details');
const userDetails=require('../details/user-details')

/* GET home page. */
router.get('/', function (req, res, next) {
  ProductDetails.getAllProducts().then((products) => {
    console.log(products);
    res.render('user/index', { products})
    })
  
});

router.get('/signin', (req, res, next)=> {
  res.render('user/signin');
});

router.get('/signup', (req, res, next)=> {
  res.render('user/signup');
  console.log('kkkkkkkkkkkkk');
});
router.post('/signup', (req, res) => {
  console.log('post signup');
  console.log(req.body); 
  userDetails.doSignup(req.body).then((response)=>{
    console.log(response);
  })
})

router.get('/forgott-pass',(req,res,next)=>{
  res.render('user/forgott-pass')
})
router.post('/add-f',(req,res)=>{
  console.log(req.body);
  console.log('forgott pass');
  res.send('Forgott Password')
})

module.exports = router;




