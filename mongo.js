const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || `mongodb://localhost/instadapp`;

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on ('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Mongoose is online');
})