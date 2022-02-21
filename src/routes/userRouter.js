const express = require('express')
const userRouter = express.Router()
const userController = require('../app/controllers/userController')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('../utils/verify')

//GET USER STATS
userRouter.get('/stats', verifyTokenAndAdmin, userController.startUser)
//GET USER
userRouter.get('find/:id', verifyTokenAndAdmin, userController.getUser)
//DELETE
userRouter.delete('/:id', verifyTokenAndAuthorization, userController.deleteUser)
//UPDATE
userRouter.put('/:id', verifyTokenAndAuthorization, userController.updateUser)
//GET ALL USER
userRouter.get('/', verifyTokenAndAdmin, userController.getallUser)

module.exports = userRouter

