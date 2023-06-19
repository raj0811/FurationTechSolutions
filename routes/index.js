const homeConroller=require('../controllers/home_controller')
const express=require('express')
const app=express();
const router = express.Router()



router.get('/',homeConroller.home)

router.use('/user',require('./user'));
router.use('/api',require('./api'))


router.use
module.exports = router;