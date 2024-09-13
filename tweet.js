const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/relation_db')
.then((result) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    username: String,
    age: Number,

})

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweet = async () => {
    const user = await User.findOne ({
        username: 'Kahfi',
    })
    const tweet1 = new Tweet ({
        text: 'Halo Dunia yang ke 2',
        likes: 20
    })
    tweet1.user = user;
    tweet1.save();
}

makeTweet();

const showTweets = async () => {
    const tweet1 = await Tweet.findById('66e3e7f18cb9c4044dc4f18a').populate('user')
    console.log(tweet1)
}

showTweets();