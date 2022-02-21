
// const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('../utils/verify')
const authRouter = require('./authRouter');
const productRouter = require('./productRouter');
const userRoute = require('./userRouter');
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter');

function router(app) {
    app.use('/api/auth', authRouter)
    app.use("/api/users", userRoute);
    app.use("/api/products", productRouter);
    app.use("/api/order", orderRouter);
    app.use('/api/cart', cartRouter);


}

module.exports = router


