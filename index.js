const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/shop_db')
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name: String,
    addresses: [{
        street: String,
        city: String,
        country: String
    }]
})

const User = mongoose.model('User', userSchema);

const makeUser