const {MongoClient}  = require("mongodb");
const url = "mongodb://localhost:27017";
const  client = new MongoClient(url);

async  function dbconnect(){
    let connection= await client.connect();
    let database=connection.db("phone_inventries");
    return database;
}
// database()

///defining a function which show the data

async function ShowData(Estar){
    let database = await dbconnect();
//     console.log(database)
let data= database.collection(Estar);
return data.find({}).toArray();
}

//defining a function to insert data
 async function insertData(Estate){
    let database= await dbconnect();
    return  database.collection(Estate);
    
 }

 //defining a functon to update data in database

module.exports=
{
 ShowData:ShowData,
 insertData:insertData,
 UpdateData:insertData,
deleteData:insertData
};