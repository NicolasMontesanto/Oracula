const db = require('../database/models');

//Middleware que hace login si existe cookie guardada
function recordarMiddleware(req, res, next) {

    let emailCookie = req.cookies.userEmail;
    if (req.session.userLogged == undefined) {
        if (emailCookie) {
            db.User.findOne({
                where: {
                    email: emailCookie
                }
            }).then(userFromCookie => {
                if (userFromCookie) {
                    req.session.userLogged = userFromCookie;
                }
                next();
            });
        } else {
            next();
        }
    } else {
        next();
    }
};

module.exports = recordarMiddleware;