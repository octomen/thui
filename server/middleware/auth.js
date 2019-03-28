const got = require('got');

const { UnauthorizedError } = require('../utils/error');
const { host } = require('../utils/config');

module.exports = async (req, res, next) => {
    const { token } = req.query;

    if (req.cookies.session_id) {
        return next();
    }

    if (token) {
        try {
            const response = await got(`${host}/login`, {
                json: true,
                query: { token }
            });
            const { body } = response;

            res.cookie('session_id', body.Authentication);
            return res.redirect('/');
        } catch (err) {
            next(err)
        }
    }

    next(new UnauthorizedError());
};
