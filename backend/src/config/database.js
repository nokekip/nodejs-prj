import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectioInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB Connected: ${connectioInstance.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;