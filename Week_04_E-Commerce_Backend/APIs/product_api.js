import exp from 'express'
import { ProductModel } from '../models/product_model.js'

const productApp = exp.Router()
productApp.use(exp.json())

// read all products
productApp.get('/products', async (req, res, next) => {
    try {
        let products = await ProductModel.find()
        res.status(200).json({ message: 'products', payload: products })
    } catch (err) {
        next(err)
    }
})

// create product
productApp.post('/products', async (req, res, next) => {
    try {
        let newProduct = req.body
        let productDetails = new ProductModel(newProduct)
        await productDetails.save()
        res.status(201).json({ message: 'Product created', payload: { id: productDetails._id } })
    } catch (err) {
        next(err)
    }
})

export default productApp;