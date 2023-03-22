import express from "express";
import cors from "cors";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

//database connection

mongoose
    .connect(process.env.MONGODB_CONNECT_URL)
    .then(() => {
        console.log("db connect");
    })
    .catch((error) => console.log("DB conection Issue:", error));

import userRouter from "./routes/userRoute.js";

//json middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

// error handlers
app.get("/error", async function (req, res, next) {
    const response = await fetch("https://jsonplaceholder.typico.com/posts");
    const data = response.json();
    res.send(data);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

app.listen(9000, () => {
    console.log("server is running");
});
