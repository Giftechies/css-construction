// lib/db.js
import mongoose from "mongoose";

let isConnected = false; // Global flag

export const ConnectDb = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URL, {
      dbName: "css_constructions", // avoid spaces in db name
    });

    isConnected = true;
    console.log("✅ DB connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
};
