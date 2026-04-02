
import Order from '../models/order.model.js';

export async function getAllOrders() {
    return await Order.findAll();
}

export async function getOrdersFilter(filter) {

    return await Order.findAll({
        where: filter,
        order: [['createdAt', 'DESC'],['id','ASC']]
    });
}