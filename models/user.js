module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the User model a name of type STRING
        // regtime: {
        //     type: DataTypes.DATE,
        //     allowNull: true
        // },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        best_score: {
            type: DataTypes.INTEGER
        }
    });

    // User.associate = function (models) {
    //     // Associating User with Posts
    //     // When an User is deleted, also delete any associated Posts
    //     User.hasMany(models.User_Question_Answer, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};