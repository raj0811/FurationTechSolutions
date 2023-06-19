const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
// mongoose.connect('mongodb+srv://raj0811:FdxT9VYDCysSegXL@cluster0.frccytz.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost/Furation');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the database");
});