const express=require('express');
const router=express.Router();
const userController=require('../controllers/user_controller');
const passport=require('passport');

router.get('/profile',passport.checkAuth,userController.profiles);
router.get('/sign-up',userController.userSignUp);
router.get('/sign-in',userController.userSignIn);
router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/login'}
),userController.createSession);


module.exports=router;
