
// router module.

import express from 'express'
import customerController from '../controllers/customerController.js'

const router = express.Router()

// for get request "/api"
router.get("/", customerController.getAllCustomer)

// for post request "/api"
router.post("/", customerController.createCustomer)

// for get request "/api/:id"
router.get("/:id", customerController.getCustomerById)

// for put request "/api/:id"
router.put("/:id", customerController.updateCustomerById)

// for delete request "/api/:id"
router.delete("/:id", customerController.deleteCustomerById)

export default router;