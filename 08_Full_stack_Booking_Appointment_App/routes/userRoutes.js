const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.get('/',userController.getUser);
router.post('/add',userController.creatUser);
router.put('/update/:id',userController.editUser);
router.delete('/delete/:id',userController.deleteUser);



module.exports = router;
