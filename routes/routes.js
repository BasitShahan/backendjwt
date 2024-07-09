const router=require('express').Router()
const {register,login, middleware }=require('../controllers/usercontroller')

//    const middleware=(req,res,next)=>{
//        console.log("first")
//        next()
//     }

router.get('/reg',register)
router.get('/login',middleware,login)
router.get('/middleware',middleware)


// router.get('/reg',(req,res)=>{
//  res.send("iam reg")
// })



// Route that uses the middleware

// router.get('/',middleware, (req, res) => {
//     console.log("hi");
//     res.send("Hello World!");
// });


module.exports=router;