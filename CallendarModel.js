import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    date: {type:Date, required: true},
    Lessons: [{Title: String}, {State: String}]
});

const Lesson = mongoose.model("Lesson", LessonSchema)

module.exports = Lesson