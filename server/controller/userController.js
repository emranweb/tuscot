import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";

// user sign in controller
const userSignIn = (req, res) => {
    const data = req.body;
    let token = jwt.sign(data, process.env.JSON_WEB_TOKEN_KEY);
    res.send(token);
};

const userSignUp = (req, res) => {
    const { name, email, password } = req.body;
    let token = jwt.sign(data, process.env.JSON_WEB_TOKEN_KEY);
    bcrypt
        .hash(password, Number(process.env.PASSWORD_ENCRIPT_SALT_ROUND))
        .then((data) => {
            const user = {
                name: name,
                email: email,
                password: data,
                token: token,
            };
            console.log(user);
        });

    res.send("hi");
};

const userController = { userSignIn, userSignUp };

export default userController;
