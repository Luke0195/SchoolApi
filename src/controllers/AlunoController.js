import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoController {
  async store(request, response) {
    try {
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
      response.json(aluno);
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(request, response) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },

      });
      response.json(alunos);
    } catch (error) {
      response.status(400).json({ error });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Missing Id' });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id']],
        include: {
          model: Photo,
          attributes: ['filename', 'url'],
        },

      });
      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado' });
      }
      response.json(aluno);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Missing Id' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado' });
      }

      const updatedAluno = await aluno.update(request.body);

      response.status(200).json(updatedAluno);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Missing Id' });
      }
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado ' });
      }

      await aluno.destroy();
      response.status(200).json({ message: 'Aluno deletado' });
    } catch (error) {
      response.status(400).json({ message: error });
    }
  }
}
export default new AlunoController();
