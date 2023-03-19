import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";

// user sign in controller
const userSignIn = (req, res) => {
    const data = req.body;
    let token = jwt.sign(data, process.env.JSON_WEB_TOKEN_KEY);
    res.send(token);
};

// User Sign Up Controller
const userSignUp = (req, res) => {
    const { name, email, password } = req.body;
    // JWT token
    let token = jwt.sign(
        { name, email, password },
        process.env.JSON_WEB_TOKEN_KEY
    );
    // Password bcrypt
    bcrypt
        .hash(password, Number(process.env.PASSWORD_ENCRIPT_SALT_ROUND))
        .then((hashPassword) => {
            const newRegisterUser = {
                name: name,
                email: email,
                password: hashPassword,
                token: token,
            };
            console.log(newRegisterUser);
        });

    res.send("hi");
};

const userController = { userSignIn, userSignUp };

export default userController;
