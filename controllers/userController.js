const { User } = require("../models");
const bcryptjs = require("bcryptjs");

const userList = async (req, res) => {
  try {
    const userList = await User.findAll();
    if (userList) {
      if (Array.isArray(userList) && userList.length !== 0) {
        res.status(200).send(userList);
      } else {
        res.status(200).send("Danh sách người dùng trống");
      }
    } else {
      res.status(404).send("Không tìm thấy danh sách người dùng");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const detailUser = async (req, res) => {
  const { id } = req.params;
  try {
    const detailUser = await User.findByPk(id);
    if (detailUser) {
      res.status(200).send(detailUser);
    } else {
      res.status(404).send("Không tìm thấy người dùng này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const createUser = async (req, res) => {
  const { name, email, password, age, phone, role } = req.body;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      age,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findOne({ where: { id } });
    if (deleteUser) {
      await User.destroy({ where: { id: id } });
      res.status(200).send("Xoá thành công");
    } else {
      res.status(404).send("Xoá người dùng thất bại");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age, phone, role } = req.body;
  try {
    const findUser = await User.findOne({ where: { id } });
    if (findUser) {
      await User.update(
        { name, email, age, phone, role },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send("Cập nhật người dùng thành công");
    } else {
      res.status(404).send("Không tìm thấy người dùng này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file, user } = req;
  const urlImage = "http://localhost:5000/" + file.path;
  // lưu link hình xuống db
  try {
    const userDetail = await User.findByPk(user.id);
    userDetail.avatar = urlImage;
    await userDetail.save();
    1;
    res.send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  userList,
  detailUser,
  deleteUser,
  updateUser,
  uploadAvatar,
};
