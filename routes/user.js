const userConroller=require('../controllers/user_conttroller')
const express=require('express')
const app=express();
const router = express.Router()



router.post('/signup',userConroller.signup)
router.post('/login',userConroller.login)

module.exports = router;