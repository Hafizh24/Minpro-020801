const db = require('../models')
const User = db.User
const Referral = db.Referral
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Op} = require('sequelize')

module.exports = {
    register: async (req, res) => {
        try{
            const {name, username, email, password, referral_code } = req.body
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
                console.log("ini referal", referral_code);
                if (referral_code) {
                    const cont = await Referral.findOne({
                        where: {
                            code: referral_code
                        }
                    })
                    console.log('ini cont', cont);
                    if (cont) {
                        await User.increment('points', {by: 5000, where: 
                        {
                            id: result.id
                        }})
                        await User.increment('points', {by: 10000, where:{
                            id: cont.UserId
                        }})
                    }
                }
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
                    }
                })
            }
            else if (email) {
                 user = await User.findOne({
                    where: {
                        email: email
                    }
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
            const token = jwt.sign(payload, 'LogIn')

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
                    attributes: ['code']
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
            const { name, email, username, password } = req.body
            const something = {}
            if (name) {
                something.name = name
            }
            if (email) {
                something.email = email
            }
            if (username) {
                something.username = username
            }
            if (password) {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                something.password = hashPassword
            }
            console.log("ini something", req.body);
            await User.update(something, {
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
    },
    updateImage: async (req, res) => {
        try {
            await User.update({ imgProfile: req.file?.path }, {
                where: {
                    id: req.user.id
                }
            })
            res.status(200).send('success upload')
        } catch (err) {
            console.log(err);
            res.status(400).send({ err: err.message })
        }
    },
    deleteAccount: async (req, res) => {
        try{
            const user = await User.destroy({
                where: {
                    id: req.user.id
                }
            })

            console.log(user);
            // await user.destroy()
            res.status(200).send('account deleted')
        } catch (err) {
            console.log(err);
            res.status(400).send({err: err.message})
        }
    }
}

