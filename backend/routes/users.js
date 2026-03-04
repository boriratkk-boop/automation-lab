const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req,res)=>{
 db.query("SELECT * FROM users",(err,result)=>{
  res.json(result)
 })
})

router.post('/',(req,res)=>{
 const {name,email} = req.body

 db.query(
  "INSERT INTO users(name,email) VALUES (?,?)",
  [name,email],
  (err,result)=>{
   res.json(result)
  }
 )
})

router.put('/:id',(req,res)=>{
 const {name,email} = req.body
 const id = req.params.id

 db.query(
  "UPDATE users SET name=?,email=? WHERE id=?",
  [name,email,id],
  (err,result)=>{
   res.json(result)
  }
 )
})

router.delete('/:id',(req,res)=>{
 const id = req.params.id

 db.query(
  "DELETE FROM users WHERE id=?",
  [id],
  (err,result)=>{
   res.json(result)
  }
 )
})

module.exports = router