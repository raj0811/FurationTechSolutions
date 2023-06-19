const itemConroller=require('../controllers/items_controller')
const express=require('express')
const app=express();
const router = express.Router()
const {isAuthenticatedUser}=require('../config/authController')



router.post('/items',isAuthenticatedUser,itemConroller.addItem)
router.get('/items',isAuthenticatedUser,itemConroller.showItems)


module.exports = router;