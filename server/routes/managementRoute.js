const express =require("express");
const adminControler = require("../controllers/management");

const router = express.Router();


router.route("/admins")
.get(adminControler.getAdmins);


router.route("/performance/:id")
.get(adminControler.getUserPerformance);


module.exports = router;