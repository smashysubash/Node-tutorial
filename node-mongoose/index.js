const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://0.0.0.0:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected Succesfully');

    Dishes.create({
        name: 'Idly',
        description:'test'
    })
    .then((dish)=>{
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
        
    })
    .catch((err)=>{
        console.log(err);
    });
});