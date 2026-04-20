const authorization = (...roles) => (req, res, next) => {
    if (roles.include(req.user.role)) {
        next();
    }

    else {
        res.status(403).json("access denied")
    }
}   

const updateAuthorization = (req, res, next) => {
    if (req.params.id === req.user.id || req.user.role.toLowerCase() === "admin") {
        next();
    }

    else {
        res.status(403).json("access denied")
    }
}

module.exports = {authorization, updateAuthorization}