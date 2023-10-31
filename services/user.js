import db from '../models'


export const getProductService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findAll({
            // raw: true,
            // nest: true,
            // include: [
            //     { model: db.Image, as: 'images', attributes: ['image'] },
            //     { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            //     { model: db.User, as: 'user', attributes: ['name', 'zalo', 'phone'] },
            // ],
            // attributes: ['id', 'name', 'email']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting products is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})



export const addProductService = ({name,email}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.create({name,email}
        )
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Getting products is failed.',
            response
        })

    } catch (error) {
        reject(error)
    }
})


export const deleteProductService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.destroy({ where: { id: id }})
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Products is deleted.',
            response
        })

    } catch (error) {
        reject(error)
    }
})


export const updateProductService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.update({ where: { id: id }})
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Products is updated.',
            response
        })

    } catch (error) {
        reject(error)
    }
})