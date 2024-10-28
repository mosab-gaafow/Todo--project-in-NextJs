import mongoose from "mongoose";

let connection: typeof mongoose;

const url = process.env.MONGOOSE_URL as string; // anagaa naqaano inu yahy string waye

const connectToDB = async() => {

    try{
        // nextJs: haddii uusan connection jirin hadda abuur
    if(!connection) {
        connection = await mongoose.connect(url)
    }

    return connection;

    }catch(e){
        console.error("Database connection error:", e);
        throw new Error("Failed to connect to the database.");
    }
    

}

export default connectToDB;