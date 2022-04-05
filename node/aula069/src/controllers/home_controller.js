exports.page = (req, res,next) => {
    console.log('atendendo cliente');
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