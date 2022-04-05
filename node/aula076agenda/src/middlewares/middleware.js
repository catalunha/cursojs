function meuMiddleware1(req, res, next) {
    res.locals.erros = req.flash('erros');
    res.locals.success = req.flash('success');
    next();

};
function checkCsrfError(error, req, res, next) {
    if (error) {
        return res.render('404');
    }
    next();
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

