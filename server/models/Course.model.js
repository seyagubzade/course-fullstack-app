const mongoose = require('mongoose');

const CourseModel = mongoose.model("CourseModel", new mongoose.Schema({
    title: String,
    author: String,
    desc: String,
    price: Number,
    image: String,
    userImg: String
}))


module.exports={CourseModel}