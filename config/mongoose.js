const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB_URL);
console.log(process.env.MONGO_DB_URL);
// mongoose.connect('mongodb://localhost/Furation');



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the database");
});