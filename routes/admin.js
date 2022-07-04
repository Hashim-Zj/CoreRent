var express = require('express');
var router = express.Router();
const fileUpload = require("express-fileupload");
const ProductDetails = require('../details/product-details');
//var ProductDetails = require('../details/product-details')

/* GET users listing. */
router.get('/', function (req, res, next) {
  ProductDetails.getAllProducts().then((products) => {
    console.log(products);
    res.render('admin/admin-cantrols', { admin: true, products });
  })
  console.log('Admin Page');
});

router.get('/add-products', (req, res, next) => {
  res.render('admin/add-products', { admin: true });
  console.log('Add Product');
});
router.post('/add-products', (req, res) => {
  console.log('---Add---');
  console.log(req.body);
  console.log(req.files.addfile);

  ProductDetails.addProduct(req.body, (id) => {
    //ProductsDetails.addProductImage(req.files.addfile, (result) => {
    // console.log("image added");
    // })
    console.log(id);
    let image = req.files.addfile
    image.mv('./public/images/product-images/' + id + '.jpeg', (err, done) => {
      if (!err) {
        res.render('admin/add-products', { admin: true })
      } else {
        console.log(err);
      }
    })

  })
})


router.get('/add', (req, res, next) => {
  res.render('admin/add', { admin: true })
  console.log('add');
})
router.post('/add', (req, res) => {
  console.log(req.body);
  res.render('admin/add', { admin: true })
})

module.exports = router;






