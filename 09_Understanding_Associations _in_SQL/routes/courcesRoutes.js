const express=required (express );
const courseController= require(' .. /controller/courseController')
const router= express.Router();

router.post('/addcourses',courseController.addCourse);
router.post('/addStudentCources',courseController.addstudentsToCourses)

modules.export=router;