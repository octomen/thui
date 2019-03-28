const got = require('got');

const { host } = require('../utils/config');

module.exports = async (req, res, next) => {
    const { session_id } = req.cookies;

    try {
        const response = await got(`${host}/themes`, {
            json: true,
            headers: {
                authentication: session_id
            }
        });
        const { body } = response;

        return res.send(body);
    } catch (err) {
        next(err)
    }
};
