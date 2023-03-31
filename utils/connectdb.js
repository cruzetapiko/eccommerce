import mongoose from "mongoose";

const connection = {};

async function connectdb() {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Using previus connection");
      return;
    }
    await mongoose.disconnect();
  }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("New connection");
    connection.isConnected = db.connections[0].readyState;
}

async function disconnectdb() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("Not disconnected");
        }
    }
}

const db = { connectdb, disconnectdb };
export default db;