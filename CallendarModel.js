import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    author:{type:String, required:[true, "Lesson must have an author"]},
    date: {type:String, required: [true, "Lesson must have a date"]},
    Title: {type:String, required:[true, "Lesson must have a Title"], unique: true},
    State: {type:String, default: "In progress"}
});

const Lesson = mongoose.model("Lesson", LessonSchema)

export default Lesson