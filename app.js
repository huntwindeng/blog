var express=require('express');
var path=require('path');
var app=express();


app.use('/public',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')));

app.get('',function(req,res){
    res.send('hello');
})

app.listen(8181,function(){
    console.log('running at port 8181......')
})