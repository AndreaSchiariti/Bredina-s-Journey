var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pgPromise from "pg-promise";
import { env } from "./utils/env.js";
const { DB_USER, DB_PASSWORD, DB_URL, DB_PORT_NUMBER, DB_NAME } = env;
const db = pgPromise()(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT_NUMBER}/${DB_NAME}`);
function setupDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.none(`
      DROP TABLE IF EXISTS users;

      CREATE TABLE users(
      id SERIAL NOT NULL PRIMARY KEY,
      username VARCHAR(255)
      );

      INSERT INTO users (username)
      VALUES ('Bredina');
      `);
        }
        catch (error) {
            throw new Error("Issues with the database setup");
        }
    });
}
setupDB();
export { db };
