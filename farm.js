const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/relation_db')
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
    }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {
//         name: 'Goddess Melon',
//         price: 10000,
//         season: 'Summer'
//     },
//     {
//         name: 'Watermelon',
//         price: 5000,
//         season: 'Fall'
//     },
//     {
//         name: 'Pumpkin',
//         price: 20000,
//         season: 'Winter'
//     },
//     {
//         name: 'Strawberry',
//         price: 15000,
//         season: 'Spring'
//     }
// ])

// const makeFarm = async () => {
//     const farm = new Farm ({
//         name: 'Farm',
//         city: 'Bulukumba'
//     })
//     const Watermelon = await Product.findOne({name: 'Watermelon'})
//     farm.products.push(Watermelon)
//     await farm.save();
//     console.log(farm)
// }

// makeFarm();

// const addProduct = async (id) => {
//     const farm = await Farm.findById(id)
//     const Pumpkin = await Product.findOne({name: 'Pumpkin'})
//     farm.products.push(Pumpkin)
//     await farm.save();
//     console.log(farm)
// }

// addProduct('66e3e18d2a0301443d438621')

Farm.findOne({ name: 'Farm'}).populate('products').then((farm) => {
    console.log(farm);
})