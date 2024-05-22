const {MongoClient}= require ("mongodb");
const url ="mongodb://localhost:27017";
const client = new  MongoClient(url);



 async function dbconnect(Group){
let connection =await client.connect();
let database = connection.db("phone_inventries");
  return  database.collection(Group);
}

module.exports=dbconnect;