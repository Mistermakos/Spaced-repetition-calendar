import express from 'express'
import callendarControler from './CallendarController.js'

const router = express.Router();

router.
    route("/")
    .get((req,res) => callendarControler.getAllLessons(req,res))
    .post((req,res) =>  callendarControler.addLesson(req,res))
router.
    route("/:id")
    .get((req,res) => callendarControler.getLesson(req,res))
    .patch((req,res) => callendarControler.updateLesson(req,res))
    .delete((req,res) => callendarControler.deleteLesson(req,res))

export default router