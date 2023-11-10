// dotenv.config({ path: '.env.local' });
// dotenv.config({ path: '.env.production' });
import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT || 8000,
  API_KEY: process.env.OPENAI_API_KEY,
};

export default config;
