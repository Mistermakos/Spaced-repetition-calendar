import express from "express"
import Lesson from "./CallendarModel.js"

const getAllLessons = async (req,res) =>{
    try{
        const query = {...req.query}
        const exclude = ['page','sort','limit','fields']

        exclude.forEach(ele => delete query[ele])
        
        let queryStr = JSON.stringify(query)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
        const help = Lesson.find(JSON.parse(queryStr)) 
        const Lessons = await help; 
        console.log("Lessons all")
        res.status(201).json({
            message:"success",
            Results: Lessons.length,
            data:{
                Lessons
            }
        })
    }
    catch(err){
        console.error("FAIL")
        res.status(401).json({
                status:"fail",
                message: err.message
        }) 
    }
}

const getLesson = async (req,res) =>
{
    try{
        const Lessons = await Lesson.findById(req.params.id) 
        console.log("Lesson")
        res.status(201).json({
            message:"success",
            data:{
                Lessons
            }
        })
    }
    catch(err){
        console.error("FAIL")
        res.status(401).json({
                status:"fail",
                message: err.message
        }) 
    }
}

const addLesson = async (req,res) =>
{
    //const NewLesson = new Lesson({})
    //NewLesson.save()
    try{
        const NewLesson = await Lesson.create(req.body)
        console.log("Add lesson")
        res.status(201).json({
            status:"success",
            data: {
                Lesson: NewLesson
            }
        })
    }catch(err){
        console.error("FAIL")
        res.status(401).json({
                status:"fail",
                message: err.message
        })
    };
}

const updateLesson = async (req,res) =>
{
   try
   {
        const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        console.log("Update lesson")
        res.status(201).json({
            status:"success",
            data: {
                lesson
            }
        })
   }
   catch(err)
   {
        console.error("FAIL")
        res.status(401).json({
                status:"fail",
                message: err.message
        })
   }
}

const deleteLesson = async (req,res) =>
{
    try{
        await Lesson.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status:"success",
            data: null
        })
    }
    catch(err){
        console.log("Check given Id")
        res.status(401).json({
            staus:"Fail",
            message:err
        })
    }
}

const callendarControler = {deleteLesson, updateLesson, addLesson, getLesson, getAllLessons}
export default callendarControler