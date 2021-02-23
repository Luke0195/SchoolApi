import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    try {
      const { email = '', password = '' } = request.body;
      if (!email || !password) {
        response.status(401).json({ messsage: 'Credenciais invalidas' });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) response.status(401).json({ message: 'Usuário não existe' });

      if (!(await user.passwordIsValid(password))) response.status(401).json({ message: 'Senha Inválida' });

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      response.json({ token, user: { nome: user.nome, id, email } });
    } catch (error) {
      response.status(401).json(error);
    }
  }
}

export default new SessionController();
