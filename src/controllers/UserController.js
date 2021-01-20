import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const user = await User.create(request.body);
      const {
        id, nome, email, created_at, updated_at,
      } = user;
      const newUser = {
        id,
        nome,
        email,
        created_at,
        updated_at,
      };
      return response.json(newUser);
    } catch (error) {
      return response.status(400).json({ message: error.errors.map((erro) => erro.message) });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'] });

      return response.json(users);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({ message: 'O usuário não encontrado' });
      }
      const {
        id, nome, email, created_at, updated_at,
      } = user;
      return response.json({
        id, nome, email, created_at, updated_at,
      });
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request, response) {
    try {
      const findUser = await User.findByPk(request.userId);

      if (!findUser) {
        return response.status(400).json({ mesasge: 'usuário não encontrado' });
      }

      const updatedUser = await findUser.update(request.body);
      return response.json(updatedUser);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async delete(request, response) {
    try {
      const findUser = await User.findByPk(request.userId);
      if (!findUser) {
        return response.status(400).json({ message: ' Não foi possivel encontrar o usuário com esse id' });
      }

      await findUser.destroy();
      return response.status(200).json({ message: 'Usuário deletado ' });
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default new UserController();
