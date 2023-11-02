require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

module.exports.createAccessToken = (userData) => {
  const data = {
    id: userData.id,
    username: userData.username,
    company: userData.company,
  };

  return jwt.sign(data, secret, { expiresIn: "1h" });
};

module.exports.verify = (req, res, next) => {
  let token = req.headers.authorization;

  if (typeof token !== "undefined") {
    token = token.slice(7, token.length);

    return jwt.verify(token, secret, (err) => {
      if (err) {
        return res.send({ auth: "failed" });
      } else {
        next();
      }
    });
  } else {
    return res.send({ auth: "failed" });
  }
};

module.exports.decode = (token) => {
  if (typeof token !== "undefined") {
    token = token.slice(7, token.length);

    return jwt.verify(token, secret, (err) => {
      if (err) {
        return null;
      } else {
        return jwt.decode(token, { complete: true }).payload;
      }
    });
  } else {
    return null;
  }
};
