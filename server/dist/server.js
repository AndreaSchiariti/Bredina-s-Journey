import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
const { API_PORT_NUMBER, CLIENT_URL } = process.env;
const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}));
server.get("/test", (req, res) => {
    res.status(200).json({ msg: "is it working now?" });
});
server.listen(API_PORT_NUMBER, () => {
    console.log(`Server API listening on port ${API_PORT_NUMBER}`);
});
