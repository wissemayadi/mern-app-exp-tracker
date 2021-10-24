const express =require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan =require('morgan');
const connectDB = require('./config/db')
const transactions= require('./route/transactions');
dotenv.config({path:'./config/config.env'});
connectDB();
const app=express();

app.use(express.json());

app.use('/api/v1/transactions',transactions)
// transactions.get('/',(req,res)=>{

// res.send('hello')

// })

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log(`the server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

