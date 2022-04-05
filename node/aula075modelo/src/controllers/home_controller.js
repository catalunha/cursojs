exports.page = (req, res, next) => {

    res.render('index', {
        titulo: 'Titulo1. Uma tag: <span style="color:red;">valor</span> qualquer.',
        numeros: [1, 2, 3]
    });
};
