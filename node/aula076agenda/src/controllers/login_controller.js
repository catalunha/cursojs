const Login = require('../models/login_model');
exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function (req, res) {
    console.log('iniciando register...');
    try {
        const login = new Login(req.body);
        await login.register();
        console.log(login.erros);
        if (login.erros.length > 0) {
            req.flash('erros', login.erros);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }
        req.flash('success', 'Usuario criado com sucesso');
        req.session.save(function () {
            return res.redirect('back');
        });

    } catch (error) {
        console.log(error);
        res.render('404');
    }

};