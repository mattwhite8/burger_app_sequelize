module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		burger_name: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                message: 'Burger name must be unique.',
                fields: [sequelize.fn('lower', sequelize.col('username'))]
            }
        },
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}
);
	return Burger;
}


