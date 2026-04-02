
import express from 'express';
import { createOrder, deleteOrder, updateOrder , getOrders } from '../controllers/shop.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('/orders page to see all orders');
});

router.patch('/:id',updateOrder);
router.delete('/',deleteOrder);
router.post('/create', createOrder);
router.get('/orders', getOrders);

export default router;
