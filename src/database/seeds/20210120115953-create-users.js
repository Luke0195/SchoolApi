const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'John Doe',
          email: 'johndoe@gmail.com.br',
          password_hash: await bcryptjs.hash('471297491279421', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Chuck Norrris',
          email: 'chuck@gmail.com.br',
          password_hash: await bcryptjs.hash('Chuck Norris', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Akuma',
          email: 'akuma@gmail.com.br',
          password_hash: await bcryptjs.hash('raging demon', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
