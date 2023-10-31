const express = require('express') 
const router = express.Router()
import * as userController from '../controllers/user.js'



router.get('/all',userController.getProductController)

router.post('/register',userController.addProductController)

router.delete('/delete/:id',userController.deleteProductController)

router.put('/update/:id',userController.updateProductController)


module.exports=router