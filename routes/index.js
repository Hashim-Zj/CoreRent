var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "Driller",
      category: "Tools",
      description: "Tis is toolbox",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtztBp51xeePPTQPknv4xeDBGCADsyEnb19cP1HNk72A&s"
    },
    {
      name: "Driller",
      category: "Tools",
      description: "Tis is toolbox",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gnWC2KSp61fWG5eeUwVtk6U5eUxmC3-d7do9_XNM9w&s",
    },
    {
      name: "Driller",
      category: "Tools",
      description: "Tis is toolbox",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZb-1AbF_gT6MiZzZQtXxZ0lqP_nXMCD083cE1gGNq8Q&s",
    },
    {
      name: "Driller",
      category: "Tools",
      description: "Tis is toolbox",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQr9AbgTqvwQRbmE0JSwtgaJwaX04AGyK1Q&usqp=CAU",
    },

  ]
  res.render('user/index', { products, admin: false })
});

router.get('/signin', (req, res, next)=> {
  res.render('user/signin');
});
router.get('/signup', (req, res, next)=> {
  res.render('user/signup');
});

router.post('/signup', (req, res) => {
  console.log("----submited------");
  console.log(req.body)
res.send('Printed in Console')
  //userDetails.userRegister(req.body, (result) => {
  //res.render('index')
})
//});

router.get('/forgott-pass',(req,res,next)=>{
  res.render('user/forgott-pass')
})
router.post('/add-f',(req,res)=>{
  console.log(req.body);
  console.log('forgott pass');
  res.send('Forgott Password')
})

module.exports = router;




