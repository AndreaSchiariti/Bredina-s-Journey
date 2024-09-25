import pgPromise from "pg-promise";
import { env } from "./utils/env";

const { DB_USER, DB_PASSWORD, DB_URL, DB_PORT_NUMBER, DB_NAME } = env;

const db = pgPromise()(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT_NUMBER}/${DB_NAME}`
)

async function setupDB () {
  try {
    await db.none (`
      DROP TABLE IF EXISTS users;

      CREATE TABLE users(
      id SERIAL NOT NULL PRIMARY KEY,
      username VARCHAR(255)
      );

      INSERT INTO users (username)
      VALUES ('Bredina');
      `)

  } catch (error) {
    throw new Error("Issues with the database setup")
  }
}
