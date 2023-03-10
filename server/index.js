import express from "express";
import cors from "cors";
const app = express();

import userRouter from "./routes/userRoute.js";

//json middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", userRouter);

app.listen(9000, () => {
    console.log("server is running");
});
