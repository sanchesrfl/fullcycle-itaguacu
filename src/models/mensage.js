const { STRING, DATE, INTEGER, DataTypes, DECIMAL } = require('sequelize')
const { connection } = require('../database/connection')


const Mensagens = connection.define("mensagens", {
    created_by:{
        //Esta coluna faz relação com o usuário que criou a mensagem
        type: INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: {
                tableName: 'users'
            },
            key: 'id'
        },
        validate: {
            notNull: {msg: "O campo created_by é obrigatório."}
        }
    },
    mensagem: {
        type: STRING,
        allowNull: false,
        validate: {
            notNull: {msg: "O campo mensagem é obrigatório."}
        },
        get() {
            return this.getDataValue('mensagem');
          },
        set(value) {
            this.setDataValue('mensagem', value.toUpperCase());
          },
    },
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
},
{ underscored: true, paranoid: true });


Mensagens.associate = (models) => {
    // Pertende a um usuário ( User )
    Mensagens.belongsTo(models.Users, {
      foreignKey: 'created_by',
      allowNull: false
    });
  };




module.exports = { Mensagens }