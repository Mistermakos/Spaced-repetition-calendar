import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    author:{type:String, required:[true, "Lesson must have an author"]},
    date: {type:String, required: [true, "Lesson must have a date"]},
    Title: {type:String, required:[true, "Lesson must have a Title"], unique: true},
    Importance: {type:Number, required: [true, "Lesson must have some level of importance"]},
    State: {type:String, default: "In progress"}
});

const Lesson = mongoose.model("Lesson", LessonSchema)

export default Lesson