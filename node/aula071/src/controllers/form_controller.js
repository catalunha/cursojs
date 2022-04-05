const HomeModel = require('../models/home_model');

// HomeModel.create({
//     titulo: 'titulo2',
//     descricao: 'descricao2'
// }).then((data) => {
//     console.log('create data = ', data);
// }).catch((error) => {
//     console.log('createerror = ', error);
// });
HomeModel.find().then((data) => {
    console.log('find data = ', data);
}).catch((error) => {
    console.log('find error = ', error);
});
exports.page = (req, res) => {
    res.send('<form action="/form1/data" method="POST"> Nome: <input type="text" name="nome"> Apelido: <input type="text" name="apelido"> <button>Enviar form</button></form>');
};

exports.data = (req, res) => {
    console.log('req.body = ', req.body);
    res.send(req.body);
};