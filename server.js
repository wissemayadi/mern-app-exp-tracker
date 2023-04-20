const path=require('path');
const express =require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const cors =require('cors');
const morgan =require('morgan');
const connectDB = require('./config/db')
const transactions= require('./route/transactions');
dotenv.config({path:'./config/config.env'});
connectDB();
const app=express();
app.use(cors);
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
}

app.use('/api/v1/transactions',transactions)

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log(`the server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

