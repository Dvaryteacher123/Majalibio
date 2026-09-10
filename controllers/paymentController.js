const axios = require('axios');

const fanyaMalipoHarakaPay = async (req, res) => {
    try {
        const { buyer_phone, amount } = req.body;
        const API_KEY = process.env.HARAKAPAY_API_KEY; 
        const BASE_URL = 'https://harakapay.net';

        const response = await axios.post(`${BASE_URL}/api/v1/collect`, {
            phone: buyer_phone,
            amount: amount || 1000,
            description: "Usajili wa Dvary Game",
            webhook_url: "https://majalibio.onrender.com/api/webhook/harakapay"
        }, {
            headers: { 
                'X-API-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        res.status(200).json({
            status: "success",
            message: "Ombi la malipo limetumwa kupitia HarakaPay!",
            data: response.data
        });

    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.response ? error.response.data : error.message
        });
    }
};

const pokeaWebhookHarakaPay = async (req, res) => {
    try {
        const taarifaZaMalipo = req.body;
        console.log("Webhook imepokelewa kutoka HarakaPay:", taarifaZaMalipo);

        if (taarifaZaMalipo.status === "completed") {
            console.log("Malipo yamekamilika kikamilifu na HarakaPay!");
        }

        res.status(200).json({ received: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { fanyaMalipoHarakaPay, pokeaWebhookHarakaPay };
