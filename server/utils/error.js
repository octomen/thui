class UnauthorizedError extends Error {
    constructor(err) {
        super();

        this.message = (err && err.message) || 'Unauthorized Error: check you session id or token params';
        this.statusCode = 401;
    }
}

class InternalServerError extends Error {
    constructor(err) {
        super();

        this.message = (err && err.message) || 'Internal Server Error';
        this.statusCode = 500;
    }
}

class InvalidTokenError extends Error {
    constructor(token) {
        super();

        this.message = `Token ${token} is invalid. It can contain "A-Za-z0-9_-" characters`;
        this.statusCode = 400;
    }
}

function handlerError(err, req, res, next) {
    let error;

    if (err.statusCode === 401) {
        error = new UnauthorizedError(err);

        res
            .status(error.statusCode)
            .end(error.message);
    }

    res
        .status(500)
        .end(new InternalServerError().message);
}

module.exports = {
    UnauthorizedError,
    InternalServerError,
    InvalidTokenError,

    handlerError
};
