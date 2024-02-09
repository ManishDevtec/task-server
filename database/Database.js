const mongoose = require('mongoose');

// const uri = "mongodb://127.0.0.1:27017/ecom";
const uri = process.env.DB_connect;

// mongoose.connect(uri).then(() => console.log('Connected!') )

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
})

const dbconnect = async () =>{
    const Product = mongoose.model('product', productSchema);
    let data = new Product({name: "sk singh", price : 30});
    const result = await data.save();
    console.log(result)
}

const connectDB = () => {
    mongoose.connect(uri).then(() => console.log('Connected!') )
}

module.exports = connectDB;