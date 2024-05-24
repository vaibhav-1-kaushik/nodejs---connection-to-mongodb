// for creation of routes///
const Express = require("express");

// connecting with database
require("./config");

// exporting model and schema
const products = require("./product");

const app = Express();

// this function helps to convert requested data into json  form...else data come in stream..o/p will be undefined
app.use(Express.json());


// making routes
app.post("/create",(req,res)=>{
    console.log(req.body);
    let data = new products(req.body);
    const result= data.save();
    res.send(result);
})

app.get("/list", async (req,res)=>{
    let Data =  await products.find();
    res.send(Data)
    // res.send("response")/

})

app.delete("/delete/:_id", async (req,res)=>{
  let data = await products.deleteOne(req.params.id)
    console.log(req.params.id);
    res.send(data);
})

app.put("/edit/:_id", async (req,res)=>{
     let newdata = await products.updateOne({name:"galaxy"},{
        $set:{
            name:"raspbery",
            price:4500,
            brand:"raspberry",
            category:"processor"
        }
     })
    res.send("sucessfully updated")

})

// listening at port 5000
app.listen(5000);