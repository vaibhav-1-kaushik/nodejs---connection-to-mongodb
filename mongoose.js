const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/phone_inventries");
//---------->
const productSh = new mongoose.Schema(
    {
        name: String,
        price: Number
    }
);

const SaveInDb = async () => {

    const ProductsModel = mongoose.model("products", productSh); //------>
    let data = new ProductsModel({ name: "m8", price: 4500 });
    let result = await data.save();
    console.log(result)
}
// SaveInDb()

const UpdateInDb = async () => {
    const Product = mongoose.model("products", productSh);
    let data = await Product.updateOne({ name: 'Motorola' }, { $set: { price: 75000, name: "Moto", brand: "xray" } })
    console.log(data)

}
// UpdateInDb()

const deleteInDb = async () => {
    const Product = mongoose.model("products", productSh);
    let DelData= await Product.deleteOne({name:"m8"});
    console.log(DelData)

}
deleteInDb();

const find =async ()=>{
    const product = mongoose.model("products",productSh);
    let read = await product.find();
    console.log(read)
}
find()

//mongoose: update stuff of mongodb help to describe schemas in easy way,

// schemas: help for validation ,descirbes the no. of fields ,thier types tc.

// model: help to connect nodejs with mongodb.it uses the schemas to connect nodejs and mongoDb