function meuMiddleware1(req, res, next) {
    res.locals.umaVarLocal = 'valor de umaVarLocal';
    console.log('Middleware global...');
    if (req.body.nome) {
        req.body.nome += '_addInfo';
        console.log('formBody.nome = ', req.body.nome);
    }
    next();

};
function checkCsrfError(error, req, res, next) {
    if (error && 'EBADCSRFTOKEN' === error.code) {
        // return res.send('BAD CSRF');
        return res.render('404');
    }
}
function csrfMiddleware(req, res, next) {
    res.locals.csrfToken = req.csrfToken()
    next();
}
module.exports = {
    meuMiddleware1,
    checkCsrfError,
    csrfMiddleware
};

