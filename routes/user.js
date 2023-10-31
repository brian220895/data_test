const express = require('express') 
const router = express.Router()
const User=require('../controllers/user.js')



router.get('/all',User.get_all)

router.post('/register',User.register)

router.put('/update/:id',User.update)


module.exports=router