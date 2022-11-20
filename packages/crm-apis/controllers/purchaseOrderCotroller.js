'use strict';

import * as BaseController from './BaseController';

class PurchaseOrderController extends BaseController {
    /**
     * @constructor 
     */
    constructor() {}

    /**
     * create a purchase order 
     */
    async createOrder(req, res) {
        try {
            const {
                title,
                vendorId,
                consumptionTax,
                transportation,
                commission,
                status,
                createdBy,
                startDate,
                endDate,
                ownerId,
                createdAddress,
                sendAddress
            } = req.body;
        
            if (typeof title !== 'string') throw new Error('title format is not correct');


        } catch (e) {
            this.writeError(res, e)
        }
    }

    /**
     * update a purchase order
     */
    async updateOrder(req, res) {}

    /**
     * list purchase orders
     */
    async listOrders(req, res) {}

    /**
     * batch delete a purchase orders by order ids
     */
    async deleteOrders(req, res) {} 
};

module.exports = PurchaseOrderController;
