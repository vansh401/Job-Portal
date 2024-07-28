import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            family:4
        });
        console.log("mongodb connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;