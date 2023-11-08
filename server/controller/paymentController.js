const db = require("../models");

const Payment = db.Payment;
// const User = db.User

module.exports = {
    pay: async (req, res) => {
        try {
            const { amount, UserId } = req.body
            const result = await Payment.create({
                amount,
                UserId,
                isPaid: true
            })
            res.status(200).send("Payment success")  
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message})
        }
        
    },
//     getDiscount: async (req, res) => {
// try {
//     const result = await Promotion.findOne({
        
//         where: {
//             EventId: req.params.id
//         }
//     })
//     // console.log(result);
//     res.status(200).send(result)
// } catch (error) {
//     res.status(400).send({message:error.message})
// }
//     }
}