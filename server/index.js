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
        res.send('ticket has been added succesfully')
    })
})
app.post('/tickets/edit/:id',(req,res)=>{
     let id = req.params.id
     let status = req.body.status
     con.query(`update tickets set status = '${status}' where id = '${id}'`, function(err, result) {
        if (err) return res.send('unable to update data')
        res.send('ticket has been updated successfully')
     })
})
app.get('/tickets/delete/:id',(req,res)=>{
    let id = req.params.id
    con.query(`delete from tickets where id = ${id}`, function(err, result) {
        if(err) return res.send('error deleting ticket')
        res.send('Ticket has been deleted successfully!')
    })
})
app.post('/tickets/view/:id',(req,res)=>{

})

app.listen(4000)

