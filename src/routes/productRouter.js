const express = require('express')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('../utils/verify')
const productRouter = express.Router()
const productController = require('../app/controllers/productController')

productRouter.post('/', verifyTokenAndAdmin, productController.createProduct)
productRouter.put('/:id', verifyTokenAndAdmin, productController.updateProduct)
productRouter.delete('/:id', verifyTokenAndAdmin, productController.deleteProduct)
productRouter.get('/', productController.getAllProduct)
productRouter.get('/find/:id', productController.getProduct)

module.exports = productRouter