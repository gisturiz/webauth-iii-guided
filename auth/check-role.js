module.exports = (type) => {
    return (req, res, next) => {
        // check that the type that was in the token is the type we're looking for (passed as an argument)
        if (type === req.user.type) {
            next();
        } else {
            res.status(403).json({ message: "You are not allowed" })
        }
    };
}