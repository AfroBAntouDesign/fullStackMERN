const express =require("express");

const clientController = require ("../controllers/clientController.js") ;


const router = express.Router();

// router.get("/products", getProducts);
// router.get("/customers", getCustomers);
// router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

router.route('/products')
.get(clientController.getProducts) ;
router.route('/customers')
.get(clientController.getCustomers);
router.route('/transactions')
.get(clientController.getTransactions);
router.route('/geography')
.get(clientController.getGeography);


module.exports = router;