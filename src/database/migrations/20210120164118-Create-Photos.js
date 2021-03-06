module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photos',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        originalname: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        filename: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'alunos',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('photos');
  },
};
