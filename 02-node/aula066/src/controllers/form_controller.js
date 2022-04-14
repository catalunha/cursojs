exports.page = (req,res)=>{
    res.send('<form action="/form1/data" method="POST"> Nome: <input type="text" name="nome"> Apelido: <input type="text" name="apelido"> <button>Enviar form</button></form>');
};

exports.data = (req,res)=>{
    console.log('req.body = ', req.body);
    res.send(req.body);
};