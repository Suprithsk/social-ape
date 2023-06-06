const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000
const config =require('./config/mongoose');
app.set('view engine', 'ejs');
app.set('views','./views');
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
