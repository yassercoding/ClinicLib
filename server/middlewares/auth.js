const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  try {
    if (!req.cookies.userToken) {
      return res.status(401).json({ message: 'Not Authenticated user!' });
    }
    const payload = await jwt.verify(req.cookies.userToken, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;