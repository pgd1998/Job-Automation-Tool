import { connect } from "mongoose";
import { config } from "dotenv";

config();


const connectDB = async ():Promise<void> => {
    const MONGO_URI = process.env.MONGO_URI || "";

    try {
        console.log(MONGO_URI);
        await connect(MONGO_URI);
        console.log("Database connected!")

    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
        
    }
};

export default connectDB;

