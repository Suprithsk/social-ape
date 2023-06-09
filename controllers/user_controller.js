const User=require('../models/user');

module.exports.profiles=(req,res)=>{
    res.render('user_profile')
}
module.exports.userSignUp=(req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    res.render('user_sign_up')

}
module.exports.userSignIn=(req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    res.render('user_sign_in');
}
module.exports.create=async (req,res)=>{
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    await User.findOne({email:req.body.email}).then(
        async (err,user)=>{
            if(err){
                console.log('signing up');
                return res.redirect('back')
            }
            if(!user){
                await User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });
                return res.redirect('/');
            }else{
                return res.redirect('back');
            }
        }
    )
}
module.exports.createSession=(req,res)=>{
    //! steps:
    //* find the user
    //* handle user found in session
    //* handle session creation
    //* handle user not found
    res.redirect('/users/profile');
}
/*cookies:
* it is used to store the data in the session
* identity is stored in the browser
*/
