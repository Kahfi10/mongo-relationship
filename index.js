const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/relation_db')
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name: String,
    addresses: [{
        _id: false,
        street: String,
        city: String,
        country: String
    }]
})

const User = mongoose.model('User', userSchema);

// const makeUser = async () => {
//     const user = new User ({
//         name: 'Kahfi'
//     })
//     user.addresses.push({
//         street: 'Tamaona',
//         city: 'Bulukumba',
//         country: 'Indonesia'
//     })

//     const res = await user.save();
//     console.log(res);    
// }
// makeUser();

// const addAddresses = async (id) => {
//     const user = await User.findById(id)
//     user.addresses.push({
//         street: 'Sam ratulangi',
//         city: 'Makassar',
//         country: 'INA'
//     })
//     const res = await user.save();
//     console.log(res)
// }
// addAddresses('66e2899aa18f7da3e03368f7')