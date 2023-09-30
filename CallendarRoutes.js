import express from 'express'
import callendarControler from './CallendarController.js'

const router = express.Router();

router.
    route("/")
    .get(callendarControler.getAllLessons)
    .post(callendarControler.addLesson)
router.
    route(":id")
    .get(callendarControler.getLesson)
    .patch(callendarControler.updateLesson)
    .delete(callendarControler.deleteLesson)

export default router