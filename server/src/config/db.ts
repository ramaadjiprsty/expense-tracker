import { log } from 'console';
import mongoose from 'mongoose';

// fungsi async utk connect ke db
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Berhasil connect ke MongoDB:" + conn.connection.host);
    } catch(error: any) {
        console.error(`Error connect ke MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;