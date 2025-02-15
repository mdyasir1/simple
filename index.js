const express = require('express');
const app = express();

app.get('/get',(req,res)=>{
    res.send('Hello')
})

app.listen(4000,()=>{
    console.log('started')
})