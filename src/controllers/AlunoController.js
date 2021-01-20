import Aluno from '../models/Aluno';

class AlunoController {
  store(request, response) {
    return response.json('ok');
  }

  async index(request, response) {
    try {
      const alunos = await Aluno.findAll();
      response.json(alunos);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }
}

export default new AlunoController();
