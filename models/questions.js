module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        catagory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        choices: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        correctAnswer: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Questions.associate = function(models) {
        // Associating User with Posts
        // When an User is deleted, also delete any associated Posts
        Questions.hasMany(models.User_Question_Answer, {
            onDelete: "cascade"
        });
    };

    return Questions;
};