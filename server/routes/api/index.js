const express = require('express');
const router  = express.Router();

router.use("/auth", require ("./auth.js"));
router.use("/wishes", require ("./wishes.js"));


module.exports = router;


