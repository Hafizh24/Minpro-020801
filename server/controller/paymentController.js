const db = require("../models");

const Payment = db.Payment;

module.exports = {
    pay: async (req, res) => {
        try {
            const { amount } = req.body
            const result = await Payment.create({
                amount,
            })
            res.status(200).send("Payment success")  
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message})
        }
        
    }
}