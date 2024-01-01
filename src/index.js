// import mongoose from "mongoose";
// import { DB_name } from './constant.js'
// import express from "express";
// const app = express();

//require('dotenv').congig({path: '../env'});

import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({path: './env'});


// connect from here
// mongoose used to connect database: mongoDB
// function run imeditaley
// listening server on port 8000
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_name}`);
//        app.on("error",(error)=>{
//         console.log(error);
//         throw error;
//        })

//        app.listen(Process.env.PORT, ()=>{
//         console.log('server has been started')
//        })
//     }catch(error){
//         console.log(error);
//     }})();

console.log(process.env.PORT);

connectDB();


