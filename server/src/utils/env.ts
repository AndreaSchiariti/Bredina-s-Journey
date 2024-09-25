import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

const envSchema = z.object({
  API_PORT_NUMBER : z.string(),
  CLIENT_URL: z.string().url(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_URL: z.string(),
  DB_PORT_NUMBER: z.string(),
  DB_NAME: z.string()
})

export const env = envSchema.parse(process.env)
