function meuMiddleware1(req, res, next) {
    console.log('Middleware global...');
    if (req.body.nome) {
        req.body.nome += '_addInfo';
        console.log('formBody.nome = ', req.body.nome);
    }
    next();

};

module.exports = {
    meuMiddleware1,
};
