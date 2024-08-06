import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            family:4
        });
        console.log("Mongodb Connected Successfully..");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;