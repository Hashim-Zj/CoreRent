var express = require('express');
var router = express.Router();
const fileUpload = require("express-fileupload")
var ProductsDetails = require('../details/product-details')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "Driller",
      category: "Tools",
      stock: "21",
      price: "₹ 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name: "Driller",
      category: "Tools",
      stock: "21",
      price: "₹ 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name: "Driller",
      category: "Tools",
      stock: "21",
      price: "₹ 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name: "Driller",
      category: "Tools",
      stock: "21",
      price: "₹ 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name: "Driller",
      category: "Tools",
      stock: "21",
      price: "₹ 20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },

  ]
  res.render('admin/admin-cantrols', { admin: true, products });
  console.log('Admin Page');
});

router.get('/add-products', (req, res, next) => {
  res.render('admin/add-products', { admin: true });
  console.log('Add Product');
});
router.post('/add-products', (req, res) => {
  console.log('---Add---');
  
  console.log(req.files.addfile);
  console.log(req.files);


  //if (req.files) {
    
    var file=req.files.addfile
   var filename=file.name;
    console.log(filename);
    var fileid=file.md5;
    console.log(fileid);
    console.log(req.body+filename+fileid);

    //file.mv('./public/images/'+filename,(error)=>{
     // if(error){
     //   console.log('Erorr In File Uplode'+error);
     // }else{
      //  console.log('File Uploded');
     // }
   // })
  //}

  ///else console.log('file not uploded');
  //console.log('Product Added');
  ProductsDetails.addProduct(req.body,(fileid) => {
    let image=req.files.addfile;
    console.log(image);
    image.mv('./public/images/'+fileid+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-products', { admin: true });
      }else{
        console.log(err);
      }
    })
 
  })

});

router.get('/add', (req, res, next) => {
  res.render('admin/add', { admin: true })
  console.log('add');
})
router.post('/add', (req, res) => {
  console.log(req.body);
  res.send('ADD Working')
})

module.exports = router;






