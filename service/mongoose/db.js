const mongoose = require('mongoose');
const config = require('config');
const uri = config.get('mongo.mongoUri');

async function connection() {
    mongoose.connect(
        'mongodb+srv://dev-user:xuGPBXAtliqPezEB@cluster0.c4kxm.mongodb.net/page_history?retryWrites=true&w=majority'
    )
        .then(() => {

            console.log('Connected to mongoDb');
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}

module.exports = connection;
