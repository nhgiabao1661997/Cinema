const jwt = require("jsonwebtoken");
// kiểm tra người dùng đã đăng nhập hay chưa
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "bao";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
  } catch (error) {
    res.status(404).send(`Bạn cần phải đăng nhập để sử dụng chức năng này`);
  }
};
const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((role) => user.role === role) > -1) {
    next();
  } else {
    res.status(403).send("Bạn không có quyền");
  }
};

module.exports = {
  authenticate,
  authorize,
};
