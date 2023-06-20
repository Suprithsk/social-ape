const express=require('express');
const router=express.Router();
const passport=require('passport');
const postController=require('../controllers/post_controller');

router.post('/create',passport.checkAuth,postController.createPost);
router.post('/edit',passport.checkAuth,postController.editPost);
router.post('/comments',passport.checkAuth,postController.commentPost)
router.get('/load-comments',postController.loadComments)

module.exports=router;

