const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  /*
   * 2 bước đăng nhập:
   * 1/ Tìm user theo email
   * 2/ so sánh password
   * */
  try {
    const userLogin = await User.findOne({ where: { email } });
    if (userLogin) {
      // so sánh password
      const isAuth = bcryptjs.compareSync(password, userLogin.password);
      if (isAuth) {
        // tạo token
        const payload = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };
        const secretKey = "bao";
        const token = jwt.sign(payload, secretKey);
        res.status(200).send({ massage: "Đăng nhập thành công", token });
      } else {
        res.status(404).send("Sai mật khẩu");
      }
    } else {
      res.status(404).send("Email không tồn tại");
    }
    res.status(200).send({ email, password });
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  const { name, email, phone, password, age, role } = req.body;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashPassword,
      age,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
