const mongoose = require('mongoose') ;
const Transaction = require('./models/Transaction.js');
const dataTransaction = require('./data/index.js')
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'}) ;
const app = require('./app') ;



console.log(process.env) ;


mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser :true 
}).then((conn) =>{
    Transaction.insertMany(dataTransaction);
    // console.log(conn);
    console.log('DB connection successful') ;
    
}).catch((err)=>{
    console.log('some error has occured')
})





// create server
const port = process.env.PORT ||5000 ;
app.listen(port,() =>{
    console.log('server is running...') ;

    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    
    // User.insertMany(dataUser);


    
}) ;
