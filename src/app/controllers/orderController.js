const Order = require('../models/Order')

class OrderController {

    // [GET] /Orders/:id
    async getOrder(req, res) {
        try {
            const orders = await Order.find({ userId: req.params.userId });
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }


    // [GET] /Orders/all
    async getAllOrder(req, res) {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [PUT] /Orders/:id
    async updateOrder(req, res) {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [DELETE] /Orders/:id
    async deleteOrder(req, res) {
        try {
            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("Order has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [POST] /Orders/
    async createOrder(req, res) {
        const newOrder = new Order(req.body);

        try {
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}


module.exports = new OrderController()