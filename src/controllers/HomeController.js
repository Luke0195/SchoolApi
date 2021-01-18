import Aluno from '../models/Aluno';

class HomeController {
  async store(request, response) {
    const {
      nome, sobrenome, email, idade, peso, altura,
    } = request.body;

    const aluno = await Aluno.create({
      nome,
      sobrenome,
      email,
      idade,
      peso,
      altura,
    });

    return response.json(aluno);
  }
}

export default new HomeController();
