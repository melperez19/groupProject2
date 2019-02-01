module.exports = function(sequelize, DataTypes) {
    var User_Question_Answer = sequelize.define("User_Question_Answer", {
      users_choice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    });
  
    User_Question_Answer.associate = function(models) {
      // We're saying that a User_Question_Answer should belong to an Author
      // A User_Question_Answer can't be created without an Author due to the foreign key constraint
      User_Question_Answer.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      User_Question_Answer.belongsTo(models.Questions, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return User_Question_Answer;
  };
  