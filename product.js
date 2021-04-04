const express=require('express')
const product=express()
product.get('/',(req,res)=>{
    res.send("login page")
})
product.get('/details',(req,res)=>{
    res.send("product name :             price:        quality:   ")
})
product.get('/contact',(req,res)=>{
    res.send("mob no:           email:        ")
})
product.listen(3000,()=>{
    console.log("server started http://localhost:3000/")
})
