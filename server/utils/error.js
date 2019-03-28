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

module.exports =  {
    UnauthorizedError,

    handlerError
};
