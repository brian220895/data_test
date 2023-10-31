const user=require('../routes/user.js')

const initRoutes =(app)=>{
    app.use('/api/user',user)
 }
 
 module.exports=initRoutes