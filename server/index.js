import express from "express";
import cors from "cors";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import errorMiddleware from "./middleware/error.js";
import authMiddleware from "./middleware/auth.js";

//database connection
mongoose
    .connect(process.env.MONGODB_CONNECT_URL)
    .then(() => {
        console.log("db connect");
    })
    .catch((error) => console.log("DB conection Issue:", error));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", authMiddleware, userRouter);

// error handler middlewaere
app.use(errorMiddleware);

app.listen(9000, () => {
    console.log("server is running");
});
