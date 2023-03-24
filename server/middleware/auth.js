const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        next();
    } else {
        throw new Error("Invalid authorization");
    }
};

export default authMiddleware;
