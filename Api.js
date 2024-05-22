const express = require ("express");
const dbconnect = require("./mongodb_connection");
const app = express();

app.use(express.json());

 // this is basically called routes
app.get("/", async (req,res)=>{
    let database = await dbconnect("products");
    let data= await database.find({}).toArray();
    res.send(data)

})


app.post("/", async (req,res)=>{
    console.log(req.body);
    let database = await dbconnect("products");
    let data= await database.insertMany(req.body);

res.send(data)
})
// app.put("/", async (req,res)=>{
//     let database =await dbconnect("products");
//     let data =  await database.updateMany(
//         {name:"Dell" }, // for condition 
//         {$set: req.body } // for data
//     )
//     res.send("updated")

// })
// app.put("/", async (req,res)=>{
//     let database =await dbconnect("products");
//     let data =  await database.updateMany(
//         {name:req.body.name }, // for condition 
//         {$set: req.body } // for data
//     )
//     res.send("updated")

// })
app.put("/:brand", async (req,res)=>{
    let database =await dbconnect("products");
    let data =  await database.updateMany(
        {brand:req.params.brand }, // for condition 
        {$set: req.body } // for data
    )
    res.send("updated")

})
const mongoDb =require("mongodb");

app.delete("/:id", async (req,res)=>{
    console.log(req.params.id)
    const database= await dbconnect("products")
    const data = await database.deleteMany({
 _id: new mongoDb.ObjectId(req.params.id)
    })
    res.send("done")

})
app.listen(5000)