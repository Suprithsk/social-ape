const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes/index'));



app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server is listening on port ${port}!`);
});
