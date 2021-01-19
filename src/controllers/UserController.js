import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const { nome, email, password } = request.body;

      const user = await User.create({
        nome,
        email,
        password,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ message: error.errors.map((erro) => erro.message) });
    }
  }
}

export default new UserController();
