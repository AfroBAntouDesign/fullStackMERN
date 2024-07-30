const express = require("express");
const  salesController  = require("../controllers/Sales");

const router = express.Router();

router.route("/sales")
.get(salesController.getSales);



module.exports = router;