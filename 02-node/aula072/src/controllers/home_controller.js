exports.page = (req, res, next) => {
    console.log('atendendo cliente');
    //criei e depois isto fica salvo na sessao do usuario por 7dias e tb no mongoDB.
    // req.session.usuario = { nome: 'ana', logado: true };
    // comentei e agora como esta salvo vou pegar de volta
    console.log(req.session.usuario);
    // testando flash
    // req.flash('flashInfo','flashInfo1');
    // req.flash('flashError','flashError1');
    // req.flash('flashSuccess','flashSuccess1');
    //recuperando as flash msg
    console.log(req.flash('flashInfo'));
    // res.send('Home aula066...');
    res.render('index');
};
//modo1 de usar o middleware
// exports.page = (req, res,next) => {
//     console.log('atendendo cliente');
//     // res.send('Home aula066...');
//     res.render('index');
//     console.log('req.session cliente = ',req.session);
//     next();
// };