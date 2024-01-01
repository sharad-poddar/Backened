import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

// use used for middlewares
// origin is place from where we can accept request
// used in proxy
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// accepting json from frontend
// limit for json data
app.use(express.json({
    limit: "16kb",
}));

// getting data from URL
app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}));

// storing an images, pdf in folder like public
app.use(express.static("public"));

// using for curd in cookie parser
app.use(cookieParser());

export {app};


