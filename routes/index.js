var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Driller",
      category:"Tools",
      description:"Tis is toolbox",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name:"Driller",
      category:"Tools",
      description:"Tis is toolbox",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gnWC2KSp61fWG5eeUwVtk6U5eUxmC3-d7do9_XNM9w&s",
    },
    {
      name:"Driller",
      category:"Tools",
      description:"Tis is toolbox",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZb-1AbF_gT6MiZzZQtXxZ0lqP_nXMCD083cE1gGNq8Q&s",
    },
    {
      name:"Driller",
      category:"Tools",
      description:"Tis is toolbox",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLa4yVXvyxBmxNI5S_kcK3IB0X5GtZgiVxw&usqp=CAU",
    },

  ]
  res.render('index', {products,admin:false})
});

module.exports = router;
