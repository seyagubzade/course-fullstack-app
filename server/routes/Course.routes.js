const { CourseController } = require("../controllers/Course.controller");
const express = require("express");
const router = express.Router();

router.get("/", CourseController.getAll);
router.get("/:id", CourseController.getById);
router.delete("/:id", CourseController.delete);
router.post("/", CourseController.add);

module.exports = router;
