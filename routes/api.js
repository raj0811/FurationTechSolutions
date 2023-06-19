const itemConroller=require('../controllers/items_controller')
const express=require('express')
const app=express();
const router = express.Router()
const {isAuthenticatedUser}=require('../config/authController')


//  create item
router.post('/items',isAuthenticatedUser,itemConroller.addItem)
// show all items
router.get('/items',isAuthenticatedUser,itemConroller.showItems)
// show one specific item by id
router.get('/items/:id',isAuthenticatedUser,itemConroller.selectItem)

// update items with id
router.put('/items/:id',isAuthenticatedUser,itemConroller.updateItem)
module.exports = router;