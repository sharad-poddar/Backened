import mongoose from "mongoose";
import { DB_name } from '../constant.js'

// DB is in another continent
const connectDB = async()=>{
    try{
        console.log('mongoDB string -> ',process.env.MONGO_DB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_name}`)
        console.log(connectionInstance);
        console.log('mongo db connected!! db host', connectionInstance.connection.host);
    }catch(error){
        console.log('mongo db connection failed -> ',error);
        // exit with some functioning
        process.exit(1);
    }
}

export default connectDB;