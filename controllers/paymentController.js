const fanyaMalipoFimi = async (req, res) => {
    try {
        const { buyer_phone, amount } = req.body;
        const apiKey = process.env.FIMIPAY_API_KEY;

        const malipoData = {
            payment_method: "mobile",
            channel: "mobile",
            amount: amount || 1000,
            currency: "TZS",
            buyer_phone: buyer_phone,
            environment: "test",
            test_outcome: "success"
        };

        console.log("API Key inayotumika:", apiKey);
        console.log("Ombi la malipo limepokelewa:", malipoData);

        res.status(200).json({
            status: "success",
            message: "Ombi la malipo limerekodiwa kikamilifu!",
            data: malipoData
        });

    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }
};

module.exports = { fanyaMalipoFimi };

