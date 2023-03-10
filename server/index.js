import express from "express";
const app = express();

//json middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(9000, () => {
    console.log("server is running");
});
