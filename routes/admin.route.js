const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const passport = require('passport');

router.get('/alluser', adminController.allUsers);
router.get('/allauthors', adminController.allAuthors);

router.put('/updateauthor/:id', adminController.updateAuthor);
router.put('/updateuser/:id', adminController.updateUser);

router.delete('/deleteauthor/:id', adminController.deleteAuthor);
router.delete('/deleteuser/:id', adminController.deleteUser);

router.put('/updateauthorpic/:id', adminController.authorProfilePicture);
router.put('/updateuserpic/:id', adminController.userProfilePicture);

router.get('/allpost', adminController.allPost);
router.get('/singlepost/:id', adminController.singlePost);
router.put('/updatpost/:id', adminController.updatePost);



module.exports = router;