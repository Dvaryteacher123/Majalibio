const express = require('express');
const router = express.Router();
const paymentController = require('./controllers/paymentController');

// Hapa ndipo njia za malipo na webhook zinapounganishwa na mpishi sahihi
router.post('/pay', paymentController.fanyaMalipoHarakaPay);
router.post('/webhook/harakapay', paymentController.pokeaWebhookHarakaPay);

module.exports = router;
