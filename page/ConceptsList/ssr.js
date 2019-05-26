const express = require('express')
app = express()
app.listen(4000)

app.get('/', function(req,res){
    res.send("test")
})

