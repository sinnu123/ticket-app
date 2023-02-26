const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
const con = mysql.createConnection(
   { host:"localhost",
     user:"root",
     password:"",
     database:"ticket-app"

})


app.use(cors());
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/tickets/list',(req, res)=>{
    con.query('select * from tickets',function(err, result){
        if(err) return res.send(err.message);
        res.json(result)
    })
})
app.post('/tickets/new',(req,res)=>{
    let name= req.body.name
    let age= req.body.age
    let fare= req.body.fare
    let distance= req.body.distance
    con.query(`insert into tickets (name,age,fare,distance,status) values ('${name}','${age}','${fare}','${distance}','pending')`, function(err,result){
        if (err) return res.send('unable to insert data')
        res.send('ticket has been succesfully')
    })
})
app.post('/tickets/edit/:id',(req,res)=>{
     
})
app.get('/tickets/delete/:id',(req,res)=>{

})
app.post('/tickets/view/:id',(req,res)=>{

})

app.listen(4000)

