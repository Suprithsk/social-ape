module.exports.profiles=(req,res)=>{
    res.send('<h1>Profile Page</h1>');
}

module.exports.userSignUp=(req,res)=>{
    res.render('user_sign_up')
}
module.exports.userSignIn=(req,res)=>{
    res.render('user_sign_in');
}
module.exports.create=(req,res)=>{
    //! to DO
}
module.exports.createSession=(req,res)=>{
    //! to DO
}
/*cookies:
* it is used to store the data in the session
* 
*/
