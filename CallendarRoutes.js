import express from 'express'
import * as callendarControler from './CallendarController.js'

const router = express.Router();

router
    .route("/top-5-tasks")
    
    .get(callendarControler.top5Important, callendarControler.getAllLessons)

router.
    route("/")
    .get(callendarControler.getAllLessons)
    .post(callendarControler.addLesson)
router.
    route("/:id")
    .get(callendarControler.getLesson)
    .patch(callendarControler.updateLesson)
    .delete(callendarControler.deleteLesson)

export default router