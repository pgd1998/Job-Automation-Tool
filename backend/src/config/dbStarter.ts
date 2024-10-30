import { connect } from "mongoose";
import { config } from "dotenv";

config();


const connectDB = async ():Promise<void> => {
    const MONGO_URI = process.env.MONGO_URI ||"mongodb+srv://poorvithgowda10:BSnCuP8ml86578vr@cluster0.nmhwkjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    try {
        await connect(MONGO_URI);
        console.log("Database connected!")

    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
        
    }
};

export default connectDB;

