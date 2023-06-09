const passport = require('passport');
const LocalStrategy=require('passport-local');
const User=require('../models/user');

//* auth using passport
passport.use(new LocalStrategy(
    {usernameField:'email'},
    (email,password,done)=>{
        User.findOne({email:email}).then(
            (user)=>{
                if(!user || user.password != password){
                    console.log('invalid username or password');
                    done(null,false);
                }
                return done(null,user);
            }
        ).catch(err=>{
            console.log(err)
            done(err);
        })
    }
))

//? serialize the user and store it in the cookie
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    }).catch((error)=>{
        console.log(error);
    })
});

passport.checkAuth =function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthUser=(req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports =passport
