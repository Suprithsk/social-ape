const express = require('express')
const app = express()
const port = 3000


//use express router
app.use('/',require('./routes/index'))

app.get('/', (req, res) =>{
    res.send('Hello World!')
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server is listening on port ${port}!`);
});
