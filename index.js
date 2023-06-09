const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000
const config =require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local');
const MongoStore=require('connect-mongo')(session);

app.set('view engine', 'ejs');
app.set('views','./views');

//? mongo store is used to store the session cookie in the db
app.use(session({
    name:'social-ape',
    secret:'randomsecret',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection: config,
            autoRemove: 'disabled'

        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthUser);


app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
//use express router
app.use('/',require('./routes/index'));




app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server is listening on port ${port}!`);
});
