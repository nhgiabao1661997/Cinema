const checkExistEmail = (Model) => async (req, res, next) => {
  const { email } = req.body;
  try {
    const detail = await Model.findOne({ where: { email: email } });
    if (detail) {
      res.status(404).send(`Email đã sớm tồn tại`);
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExistEmail,
};
