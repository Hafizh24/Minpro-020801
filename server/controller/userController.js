const db = require('../models')
const User = db.User
const Referral = db.Referral
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

module.exports = {
    register: async (req, res) => {
        try{
            const {name, username, email, password } = req.body
            function referralCodeGenerator (name) {
                if (name.length >= 2) {
                  console.log("Ini length", name.length);
                  const words = name.split(" ");
                  const userChars = words
                    .map((word) => word.charAt(0).toUpperCase())
                    .join("");
                  const randomChars = Math.random()
                    .toString(36)
                    .substring(2, 6)
                    .toUpperCase();
                  const generatedCode = `${userChars}${randomChars}`;
                  console.log("Ini generated Code", generatedCode);
                  return generatedCode
                } else {
                  // alert("name must at least contain 2 characters");
                }
              };

              const referral = referralCodeGenerator(name)
              console.log(referral);
            
            const test = await User.findOne({
                where:{
                    [Op.or]:[
                        {username:username},
                        {email:email}
                    ]
                }
            })
            if(!test){
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)

                const result = await User.create({
                    name: name,
                    email: email,
                    username: username,
                    password: hashPassword,
                })
                await Referral.create({
                    code: referral,
                    points: 0,
                    UserId: result.id
                })
                return res.status(200).send({message:'Register Success',result:result})
            } else{
                return res.status(400).send("User already exist")
            }
        }catch (err){
            console.log(err);
            return res.status(400).send({message: err.message})
        }
    },
    getAll: async (req, res) => {
        try {
            const result = await User.findAndCountAll()
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    login: async (req, res) => {
        try {
            let user 
            const { username, email, password } = req.body
            if (username) {
                 user = await User.findOne({
                    where: {
                        username: username
                    },
                    // include: {
                    //     model: Referral,
                    //     required: true,
                    //     attributes: ['code', 'points']
                    // }
                })
            }
            else if (email) {
                 user = await User.findOne({
                    where: {
                        email: email
                    },
                    // include: {
                    //     model: Referral,
                    //     required: true,
                    //     attributes: ['code', 'points']
                    // }
                })
            }
            if (!user){
                return res.status(404).send({
                    message: 'user not found'
                })
            }
            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid) {
                return res.status(400).send({
                    message: 'incorrect password'
                })
            }

            const payload = { id: user.id }
            const token = jwt.sign(payload, 'LogIn', { expiresIn: '30m' })

            console.log("ini user", user);

            res.status(200).send({
                message: "login success",
                result: user,
                token
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    keeplogin: async (req, res) => {
        try {
            const result = await User.findOne({
                where: {
                    id: req.user.id
                },
                include: {
                    model: Referral,
                    required: true,
                    attributes: ['code', 'points']
                }
            }) 
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    editUser: async (req, res) => {
        try {
            await User.update(req.body, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send("User Updated")
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    editPass: async (req, res) => {
        try {
            const { password } = req.body
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            await User.update({ password: hashPassword }, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send("Password Updated")
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    }
}

