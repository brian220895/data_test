// const db=require('../models')

import db from '../models'

import * as userService from '../services/user.js'



export const getProductController = async (req, res) => {
   try {
       const response = await userService.getProductService()
       return res.status(200).json(response)

   } catch (error) {
       return res.status(500).json({
           err: -1,
           msg: 'Failed at post controller: ' + error
       })
   }
}


// export const getProduct =async(req,res)=>{
   
    

//     try {

//         const response = await db.User.findAll({})
//         return res.status(200).json(response)
//       } catch (error) {
//          return res.status(500).json('Internal error')
//       }

   
   
// }

export const addProductController =async(req,res)=>{
   
     try {

       const {name,email}=req.body

       const response = await userService.addProductService(req.body)

        return res.status(200).json(response)
     } catch (error) {
        return res.status(500).json('Internal error')
     }
    
 }





export const deleteProductController =async(req,res)=>{
   
   try {

     

     const id = Number(req.params.id.slice(3, 5).trim())
   //   const id = Number(req.params.id)
   // const id = 4
   //   console.log('id',id)
   // return await res.status(200).json(id)

   const response = await userService.deleteProductService(id)

   //   console.log('http://localhost:3001/api/user/all',id)

   // const response = await db.User.destroy({ where: { id:1 }} )

      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json('Internal error')
   }
  
}


 export const updateProductController =async(req,res)=>{
   
    try {

      

      const id = Number(req.params.id.slice(3, 5).trim())



    //   console.log('http://localhost:3001/api/user/all',id)

      const response = await db.User.update(req.body, { where: { id: id }})

       return res.status(200).json(response)
    } catch (error) {
       return res.status(500).json('Internal error')
    }
   
}

 
//  module.exports={

//     register,get_all,update
//  }