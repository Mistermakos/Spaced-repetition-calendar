import express from "express"
import Lesson from "./CallendarModel.js"
import APIFeatures from "./utilities/APIFeatures.js"

export const top5Important = (req,res, next) => {
    req.query.sort='-Importance'
    req.query.limit='5'
    req.query.fields='-date,-__v'
    next();
}

export const getAllLessons = async (req,res) =>{
    
    try{
        const features = new APIFeatures(Lesson.find(), req.query)
            .filter()
            .sort()
            .limit()
            .paginate()

        const Lessons = await features.query; 
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

export const getLesson = async (req,res) =>
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

export const addLesson = async (req,res) =>
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

export const updateLesson = async (req,res) =>
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

export const deleteLesson = async (req,res) =>
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

