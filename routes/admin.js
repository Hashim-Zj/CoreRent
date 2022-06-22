var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Driller",
      category:"Tools",
      stock:"21",
      price:"₹ 20",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name:"Driller",
      category:"Tools",
      stock:"21",
      price:"₹ 20",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name:"Driller",
      category:"Tools",
      stock:"21",
      price:"₹ 20",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name:"Driller",
      category:"Tools",
      stock:"21",
      price:"₹ 20",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name:"Driller",
      category:"Tools",
      stock:"21",
      price:"₹ 20",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },

  ]
  res.render('admin/admin-cantrols',{admin:true,products});
});
router.get('/add-products',(req,res)=>{
  res.render('admin/add-products')
})
router.post('/add-products',(req,res)=>{
  //res.render('admin/add-products')
  console.log(body);
})

module.exports = router;




