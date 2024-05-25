

//  const {express = require("express");

// middleware: midlleware is nothing just an function which execute between client and server. this come hell between req and response cycle .
// application/
// 1. authorization
// 2. filter the request 
// 3.allow to acess req and res
const express =require("express");
const app =express();
const ex_midleware=require("./midleware")
const route=express.Router();
route.use(ex_midleware)
const middleware=(req,res,next)=>{
    console.log(typeof(req.query.age))
    let umar=parseInt(req.query.age)
    console.log(umar)
    if(!umar){
        res.send("please provide age")
    }else if(umar<18){
        res.send("your age is less than 18: thanks for visiting")
    }else {
        next()
    }
}

// route level middleware
// rote midlleware were used for route specific

// app.use(middleware)
app.get("",(req,res)=>{
    res.send("wecome to home page")

})

app.get("/users",middleware,(req,res)=>{
    res.send("this is user page")
})
app.get("/about",ex_midleware,(req,res)=>{
    res.send("this is about page")
})

route.get("/contact",(req,res)=>{
    res.send("this is contact page")
})
app.use("/",route)
app.listen(5000)












// const express =require("express");
// const execute=express();
// const path =require("path");
// const direction =path.join(__dirname)
// execute.get()
// console.log(direction)
// execute.use(express.static(direction));
// execute.get('',(req,res)=>{
// res.sendFile(`${direction}/index.html`)
// })
// execute.get('/about',(req,res)=>{
//     res.sendFile(`${direction}/index11.html`)
//     })
//     execute.get('*',(req,res)=>{
//         res.sendFile(`${direction}/index12.html`)

        // })
//         execute.set("view engine","ejs")

//         execute.get("/profile",(req,res)=>{
//             const details={
//                 name:"vaibhav kaushik",
//                 age:18,
//                 contact:8461070955,
//                 email:"www.vaibhavkaushikv20@gmail.com",
//                 skills:["html","css","javascript","c",'java',"node.js","mongodb" ]
//             }
//             execute.get("/header",(req,res)=>{
//              res.render("header")
//             })
//             res.render("profile",{details})
//         })
// execute.listen(5000)




// express.js tutorials /

// what is XPathExpression.js
// 1 it is a frame work of nodemon.js

// const fs=require("fs");
// for(i=1;i<5;i++){
//     fs.unlinkSync("vaibhav"+i)
// // }
// const express =require("express");
// const app=express();

// app.get(``,(req,res)=>{
//     res.send(`<h1> Welcome to home page</h1>
   
//    <a href="/about" >go to aboutus page </a> `)
    
// })
// app.get(`/about`,(req,res)=>{
//     res.send("hello this is another page"+
//     ` <a href="/" >go to home page </a>`
// +  ` <a href="/signup" >go to signup page </a>`    )
//     // res.send(` <a href="/" >go to home page </a>`)
    
// })
// app.get("/signup",(req,res)=>{
//     console.log(">>>",req.query)
// res.send(` <a href="/" >go to home page </a>`
// +`this your startup pages ${req.query.name}`
// )
// })
// app.listen(5000)