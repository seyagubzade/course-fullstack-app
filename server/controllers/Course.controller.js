const { CourseModel } = require("../models/Course.model");

const CourseController = {
  getAll: async (req, res) => {
    try {
      const data = await CourseModel.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await CourseModel.findById(id);
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { title, author, desc, price, image, userImg } = req.body;
      const newData = new CourseModel({
        title,
        author,
        desc,
        price,
        image,
        userImg,
      });
      await newData.save();
      res.send(newData).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await CourseModel.findByIdAndDelete(id);
      const allData = await CourseModel.find({});
      res.send(allData).status(203);
    } catch (err) {}
  },
};

module.exports = { CourseController };
