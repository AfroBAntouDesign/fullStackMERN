const {application} = require('express') ;
const express = require('express') ;
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute')
const clientRoute = require('./routes/clientRoute');
const salesRoute = require('./routes/SalesRoute') ;
const managementRoute = require('./routes/managementRoute') ;
const cors = require('cors');








//  CONFIGURATION
let app = express() ;
dotenv.config()

const logger = function( req , res , next){

    console.log('custom middleware called') ;
    next() ;
 }
 if(process.env.NODE_ENV === 'development'){
       app.use(morgan('dev')) ;
 
 
       
 }
 app.use(logger) ;

 app.use(( req , res , next )=>{
    req.requestedAt = new Date().toISOString() ;
    next() ;
}) ;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API Config 
app.use('/api/v1/dashboard',userRoute) ;
app.use('/api/v1/dashboard',clientRoute); 
app.use('/api/v1/dashboard',salesRoute); 
app.use('/api/v1/dashboard',managementRoute);



module.exports = app ;