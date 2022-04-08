import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'ana',
      snome: 'aninha',
      email: 'ana@gmail.com',
      nascimento: new Date().toString(),
      peso: 94.6,
      altura: 1.87,
    });
    res.json(novoAluno);
    // res.status(200).json({
    //   tudoCerto: true,
    // });
  }
}
// export a instancia da classe
export default new HomeController();
