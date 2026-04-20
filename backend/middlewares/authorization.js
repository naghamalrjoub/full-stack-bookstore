const authorization = (...roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        }

        else {
            return res.status(403).json("access denied")
        }
    }      
}
 
const updateAuthorization = (req, res, next) => {
    console.log(req.params.id)
    if (req.params.id === req.user.id || req.user.role.toLowerCase() === "admin") {
        next();
    }

    else {
        return res.status(403).json("access denied")
    }
}

module.exports = {authorization, updateAuthorization}