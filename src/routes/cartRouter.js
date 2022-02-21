const express = require('express');
const CartRouter = express.Router();
const cartController = require('../app/controllers/cartController')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('../utils/verify')


CartRouter.post('/', cartController.createcart)
CartRouter.put('/:id', verifyTokenAndAuthorization, cartController.updatecart)
CartRouter.delete('/:id', verifyTokenAndAuthorization, cartController.deletecart)
CartRouter.get('/all', verifyTokenAndAdmin, cartController.getAllcart)
CartRouter.get('/find/:userId', verifyTokenAndAuthorization, cartController.getcart)


module.exports = CartRouter