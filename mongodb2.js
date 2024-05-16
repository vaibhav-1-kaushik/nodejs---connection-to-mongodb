const m = require("./mongodb1")

// to delete data in the database
m.UpdateData("products").then((data)=>{
    // console.log(inData);
    let Delete = data.deleteMany({name:"m10"})   // always return promise
    Delete.then((Deleted)=>{
        if(Deleted.acknowledged){
            console.log("deleted !")
        }
    })


})


// to update data in database
// m.UpdateData("products").then((data)=>{
//     let indata =data;
//     // console.log(indata)
//     let update= data.updateMany(
//         {brand:"samsung"},
//         {$set:{price:12000}})
//         update.then((updated)=>{
//             if(updated.acknowledged){
//                 console.log("Data updated")

//             }
//         })
    
// })



//to insert data in database

// m.insertData("products").then((data) => {
//  
//     let result= data.insertMany(
//       [ 
        //  {
        //     name: "android",
        //     brand: "samsung",
        //     category: "phone",
        //     price: "1000"
        // },
        // {
        //     name: "v32",
        //     brand: "vivo",
        //     category: "phone",
        //     price: "14000"

        // },
        // {
        //     name: "galaxy g10",
        //     brand: "samsung",
        //     category: "phone",
        //     price: "13000"

        // }
    // ]
    // )
    // result.then((outs)=>{
    //   if(outs.acknowledged){
    //     console.log("entry submmitted")
    //   }
    // })
// })



// to read data from database

m.ShowData("products").then((data) => {
    console.log(data)
})