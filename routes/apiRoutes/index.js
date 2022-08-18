const express = require('express');
const router = express.Router();

// middleware
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;