import jwt from "jsonwebtoken";

// user sign in controller
const userSignIn = (req, res) => {
    const data = req.body;
    let token = jwt.sign(data, process.env.JSON_WEB_TOKEN_KEY);
    res.send(token);
};

const userSignUp = (req, res) => {
    const { name, email, password } = req.body;
    const user = { name, email, password: password };
};

const userController = { userSignIn, userSignUp };

export default userController;
