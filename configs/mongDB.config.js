import mongoose from 'mongoose';
import env from './environment.config.js';

const connect = async () => {
  try {
    await mongoose.connect(env.databaseUrl);
    console.log('Connect Database Success!');
  } catch (error) {
    console.log('Connect Database Error: ', error);
  }
};

export default connect;
