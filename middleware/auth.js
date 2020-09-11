const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token found, access denied' });
  }

  try {
    const decoded = jwt.verify(token, 'jwtSecret');
    req.tutor = decoded.tutor;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};
