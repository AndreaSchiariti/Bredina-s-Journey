import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import { env } from "./utils/env.js";
import { getUsers } from "./controllers/users.js";

const { API_PORT_NUMBER, CLIENT_URL } = env;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

server.get("/test", getUsers);

server.listen(API_PORT_NUMBER, () => {
  console.log(`Server API listening on port ${API_PORT_NUMBER}`);
});
