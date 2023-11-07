const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return res.status(401).send({
          message: "Token Empty",
        });
      }
      token = token.split(" ")[1];

      if (token === null || !token) {
        return res.status(401).send("Unauthorized request");
      }

      let verifiedUser = jwt.verify(token, "LogIn");

      if (!verifiedUser) {
        return res.status(401).send("Unauthorized request");
      }

      req.user = verifiedUser;
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
