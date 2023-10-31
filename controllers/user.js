const db=require('../models')


const get_all =async(req,res)=>{
   
    

    try {

        const products = await db.User.findAll({})
        console.log('products',products)
        return res.status(200).json(products)
      } catch (error) {
         return res.status(500).json('Internal error')
      }

   
   
}

const register =async(req,res)=>{
   
     try {

       const {name,email}=req.body

       const response = await db.User.create(req.body);

        return res.status(200).json(response)
     } catch (error) {
        return res.status(500).json('Internal error')
     }
    
 }


 const update =async(req,res)=>{
   
    try {

      

    //   let id = req.params.id



    //   console.log('http://localhost:3001/api/user/all',id)

      const response = await db.User.update(req.body, { where: { id: 1 }})

       return res.status(200).json(response)
    } catch (error) {
       return res.status(500).json('Internal error')
    }
   
}

 
 module.exports={

    register,get_all,update
 }