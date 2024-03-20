import mongoose from "mongoose";
import env from "./environment.config.js";

const connect = async () => {
  try {
    await mongoose.connect(env.databaseUrl);
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Error: ", error);
  }
};

export default connect;
