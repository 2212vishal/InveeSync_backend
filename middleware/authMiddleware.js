const jwt = require('jsonwebtoken');
require("dotenv").config();


const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.userId = decoded.userId;
    next();
  });
};


module.exports = { authenticateToken };

