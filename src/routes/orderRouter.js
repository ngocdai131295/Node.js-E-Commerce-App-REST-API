const express = require('express')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('../utils/verify')
const orderRouter = express.Router()
const orderController = require('../app/controllers/orderController')

orderRouter.post('/', verifyToken, orderController.createOrder)
orderRouter.put('/:id', verifyTokenAndAdmin, orderController.updateOrder)
orderRouter.delete('/:id', verifyTokenAndAdmin, orderController.deleteOrder)
orderRouter.get('/', verifyTokenAndAdmin, orderController.getAllOrder)
orderRouter.get('/find/:id', verifyTokenAndAuthorization, orderController.getOrder)

module.exports = orderRouter